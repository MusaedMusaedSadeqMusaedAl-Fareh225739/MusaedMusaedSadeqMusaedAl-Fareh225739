<h1 align="center">Musaed Al-Fareh</h1>

<p align="center">
  <strong>AI Engineer · LLM Systems · RAG Evaluation · Post-training</strong><br/>
  AI Developer at CROW · Final-year Applied Data Science & AI at BUas · JADS pre-master
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/musaed-alfareh-a365521b9"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:jimalfareh@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="https://alfareh.nl"><img src="https://img.shields.io/badge/alfareh.nl-000000?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio"/></a>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=MusaedMusaedSadeqMusaedAl-Fareh225739&color=0E75B6&style=flat-square" alt="Visitors"/>
</p>

---

### About

I build LLM systems that hold up outside the notebook: retrieval pipelines, evaluation harnesses, and fast local inference.

Right now I'm an AI Developer at **CROW**, the Dutch knowledge platform for infrastructure and traffic, where I work on RAG quality, evaluation, and data ingestion for their knowledge chatbot. Before that I built the full AI stack for a museum voice assistant at Stedelijk Museum Breda.

Next up: a graduation placement in LLM engineering from February 2027, focused on fine-tuning and post-training.

- **#1 in the Netherlands**, Digital Skills Cup 2026 (AI Pro), competed at the World Finals
- Researching how post-training method (SFT vs GRPO) affects quantization robustness in small tool-calling models
- Open to LLM engineering / research engineering roles from Feb 2027

---

### Current Work

**RAG evaluation at CROW**
Multi-dataset golden-set framework with live scoring in Langfuse. Head-to-head evaluation of a hosted RAG product against a custom pipeline (hit rate, MRR, faithfulness, LLM judge). The custom pipeline reached a 61% hit rate vs 21% for the hosted one. Reranker study showed +0.08 to +0.22 hit@5 with Cohere rerank-v3.5.

**Image enrichment for RAG**
Grounded vision pipeline that writes Dutch descriptions for thousands of knowledge-base images: perceptual-hash dedup, publication context from Elasticsearch, confidence routing, human review, and write-back.

**quant-decisions** *(research)*
Does SFT, GRPO, or both change how often INT4 quantization flips a model's call / ask / refuse decisions? Testing a decision-margin reward as a cheaper fix than quantization-aware training. Public models and data only.

---

### Selected Projects

| Project | What it does | Stack |
|---|---|---|
| **UGUIDU** | Voice assistant for Stedelijk Museum Breda. Latency cut from 20 to 35s down to under 1s, RAG over 32k+ records, CLIP artifact recognition (31 classes, 91% acc, ~60ms) | vLLM · Qwen3-14B-AWQ · Whisper · CLIP · pgvector · FastAPI · Docker |
| **CROW RAG Eval** | Evaluation and observability for a production knowledge chatbot, 1,362-question runs across RAW publications | Python · Elasticsearch · Azure OpenAI · Langfuse · LangChain |
| **Arabic Voice Agent** | Arabic RAG voice system with sub-2s latency | Whisper · Llama 3.3 70B · RAG · FastAPI |
| **MrrrMe** | Real-time multimodal emotion detection with conflict-aware fusion of face, voice, and text | ViT · emotion2vec · DistilRoBERTa · PyTorch |
| **MARBERT Arabic Emotion** | Dialect emotion classification with fine-tuned MARBERT (graded 9/10) | MARBERT · HuggingFace · PyTorch |
| **ANWB Traffic DL** | Traffic accident prediction with deep learning (graded 9.7/10) | PyTorch · scikit-learn · pandas |

---

### Stack

**LLMs & inference**
vLLM · AWQ / INT4 quantization · Qwen · Llama · Whisper · Azure OpenAI · HuggingFace Transformers

**Retrieval & evaluation**
Elasticsearch · pgvector · hybrid search · rerankers · Langfuse · LLM-as-judge · golden sets

**Engineering**
Python · FastAPI · PyTorch · Docker · Portainer · PostgreSQL · Git · C#/.NET

**Frontend (supporting)**
React · Next.js · TypeScript

---

### GitHub

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=MusaedMusaedSadeqMusaedAl-Fareh225739&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true&show_rank=false" alt="GitHub stats"/>
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=MusaedMusaedSadeqMusaedAl-Fareh225739&layout=compact&theme=github_dark&hide_border=true&langs_count=6" alt="Top languages"/>
</p>

---

<p align="center"><em>Building AI that works in production, one hard bug at a time.</em></p>
