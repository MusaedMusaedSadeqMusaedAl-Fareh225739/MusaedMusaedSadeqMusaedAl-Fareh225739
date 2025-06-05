import { graphql } from "@octokit/graphql";
import fs from "fs-extra";
import dayjs from "dayjs";

// Your GitHub username
const USERNAME = "MusaedMusaedSadeqMusaedAl-Fareh225739";

// Auth with your PAT passed as GRAPHQL_TOKEN env variable
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GRAPHQL_TOKEN}`,
  },
});

async function main() {
  const today = dayjs();
  const oneYearAgo = today.subtract(1, "year").add(1, "day").startOf("day").toISOString();
  const endDate = today.endOf("day").toISOString();

  // Fetch contribution data
  const query = `
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await graphqlWithAuth(query, {
    username: USERNAME,
    from: oneYearAgo,
    to: endDate,
  });

  const weeks = response.user.contributionsCollection.contributionCalendar.weeks;

  const cellSize = 12;
  const gap = 3;
  const svgWidth = weeks.length * (cellSize + gap) + gap;
  const svgHeight = 7 * (cellSize + gap) + gap;

  // Color scale (GitHub native colors)
  function getFillColor(day) {
    const count = day.contributionCount;
    if (day.date === today.format("YYYY-MM-DD")) return "#f97583"; // Today's pink

    if (count === 0) return "#161b22";       // Empty cell (dark background)
    if (count < 3) return "#0e4429";
    if (count < 6) return "#006d32";
    if (count < 10) return "#26a641";
    return "#39d353";
  }

  let rects = "";

  // Build rectangles for each day
  weeks.forEach((week, weekIndex) => {
    week.contributionDays.forEach((day, dayIndex) => {
      const x = weekIndex * (cellSize + gap) + gap;
      const y = dayIndex * (cellSize + gap) + gap;
      const fill = getFillColor(day);
      rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${fill}" rx="3" />`;
    });
  });

  // Add full dark background
  const svgContent = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg" style="background-color:#0d1117">
      ${rects}
    </svg>
  `;

  await fs.outputFile("contributions.svg", svgContent.trim());
  console.log("✅ contributions.svg generated");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

