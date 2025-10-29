# Wayfair AI Automation Externship

**Program:** Extern – Wayfair AI Automation Externship  
**Duration:** Oct 27 – Dec 22, 2025  
**Program Manager:** Christie Andersen  
**Progress:** ✅ Project 1 done | 🚧 Project 2 in progress | 🏁 Goal: Professional Award

---

## 📘 Overview

This repository documents my progress through the **Wayfair AI Automation Externship**, an 8-week experience focused on **AI agents, data automation, and trend discovery**.

Each project builds on the last:

1. **Orientation:** Program setup & goals  
2. **Moodboard Generator Agent:** Prompts → Gemini image generation → visual moodboard  
3. **Consumer Trend Discovery Agent:** Detect design trends via blogs, RSS feeds, and search  
4. **Competitor Monitoring Agent**  
5. **AI Insights & Content Agent**  
6. **Market Intelligence Dashboard**

---

## 🧠 Tools & Tech

- **n8n** (workflow automation)
- **Google Gemini API** (LLM + image generation)
- **Python / JS snippets** (data cleaning, API parsing)
- **Web scraping + RSS feeds**
- **Streamlit or simple HTML dashboards**

---

## 🗓 My Progress

### Week 1 – Orientation
- Reviewed program materials and met Program Manager Christie Andersen
- Set up n8n Cloud account and obtained Google Gemini API key
- Built basic "Hello World" workflow to test node connections
- Joined Slack community and familiarized with externship structure

### Week 2 – Project 1: Moodboard Generator ✅
**Goal:** Build an AI workflow that turns a short style idea into a moodboard using n8n and Google Gemini.

**Workflow:** `When chat message received → AI Agent (Gemini Chat Model) → Code (clean prompt) → HTTP Request (Gemini Image API) → Code (parse) → Image File Converter`

**Result:** Generated moodboard images from prompts like "Bohemian rugs, neutral tones." Encountered API rate limits but confirmed full end-to-end workflow execution.

**Screenshot:** ![Moodboard Agent Workflow](./screenshots/project1/moodboard_agent_workflow.png)

**Skills learned:** Building low-code AI agents with n8n, prompt engineering for visuals, handling API calls & rate-limit debugging, JSON parsing and data transformation

### Week 3 – Project 2: Trend Discovery Agent 🚧
*Coming soon...*

---

## 🧾 Repository Structure

- `workflows/` → exported n8n JSONs organized by project
  - `workflows/project1/` → Project 1 workflows
  - `workflows/project2/` → Project 2 workflows (coming soon)
- `screenshots/` → visual documentation for all projects
  - `screenshots/project1/` → Project 1 specific screenshots and outputs
- `docs/` → project documentation and reports

---

## 📫 Contact

**Rayyan Oumlil**  
[LinkedIn](https://www.linkedin.com/in/rayyan-oumlil-871b192b6/) • [GitHub](https://github.com/rayyan-oumlil)
