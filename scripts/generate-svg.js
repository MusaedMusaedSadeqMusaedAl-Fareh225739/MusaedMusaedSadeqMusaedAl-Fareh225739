// scripts/generate-svg.js
import { graphql } from "@octokit/graphql";
import fs from "fs-extra";
import dayjs from "dayjs";

// 1) YOUR GitHub username (must match the repo name exactly)
const USERNAME = "MusaedMusaedSadeqMusaedAl-Fareh225739";

// 2) Authenticate via the GITHUB_TOKEN secret
const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

async function main() {
  // a) Compute “one year ago” and “today” as full ISO 8601 strings
  const today = dayjs();
  const oneYearAgo = today
    .subtract(1, "year")
    .add(1, "day")
    .startOf("day")
    .toISOString();      // e.g. "2024-06-05T00:00:00.000Z"
  const endDate = today
    .endOf("day")
    .toISOString();      // e.g. "2025-06-04T23:59:59.999Z"

  // b) Fetch contribution calendar via GraphQL
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

  // c) Build SVG dimensions (7 rows × N weeks)
  const cellSize = 12; // each square is 12×12 px
  const gap = 2;       // 2px gap between squares
  const svgWidth = weeks.length * (cellSize + gap) + gap;
  const svgHeight = 7 * (cellSize + gap) + gap;

  // d) Helper: choose fill color per day
  function colorFor(dayObj) {
    const dateStr = dayObj.date;
    if (dateStr === today.format("YYYY-MM-DD")) {
      return "#FF69B4"; // pink for today
    }
    const count = dayObj.contributionCount;
    if (count === 0) return "#ebedf0";      // no contributions
    if (count < 3) return "#9be9a8";         // light green
    if (count < 6) return "#40c463";         // medium green
    return "#30a14e";                        // dark green
  }

  // e) Generate <rect> entries for each day
  let rects = "";
  weeks.forEach((week, wIdx) => {
    week.contributionDays.forEach((day, dIdx) => {
      const x = wIdx * (cellSize + gap) + gap;
      const y = dIdx * (cellSize + gap) + gap;
      const fill = colorFor(day);
      rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${fill}"/>`;
    });
  });

  // f) Wrap in an <svg> block
  const svgContent = `
    <svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">
      ${rects}
    </svg>
  `;

  // g) Write to contributions.svg
  await fs.outputFile("contributions.svg", svgContent.trim());
  console.log("✅ contributions.svg generated");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
