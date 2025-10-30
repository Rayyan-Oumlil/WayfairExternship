# Wayfair AI Automation Externship

**Program:** Extern – Wayfair AI Automation Externship  
**Duration:** Oct 27 – Dec 22, 2025  
**Program Manager:** Christie Andersen  
**Progress:** ✅ Project 1 done | ✅ Project 2 done | 🏁 Goal: Professional Award

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

### Week 3-4 – Project 2: Consumer Trend Discovery Agent ✅
**Goal:** Build an AI agent that detects user intent, scrapes live product data, reads RSS feeds, performs Google searches, and generates intelligent HTML trend reports.

**Workflow Steps:**
1. **Intent Detection:** AI agent classifies queries as "trend" or "non-trend" using Google Gemini, routing workflows accordingly
2. **Smart Non-Trend Responses:** Direct conversational answers for FAQs without triggering data-heavy searches
3. **RSS Feed Integration:** Multiple RSS Feed Read nodes capture real-time industry signals from design blogs (Dezeen, Design Milk, Nazmiyal, etc.)
4. **Google Search:** Google Custom Search API fetches live web results for trend-related queries
5. **Amazon Scraping:** Web scraping extracts product-level data (prices, features, descriptions) from Amazon product and collection pages
6. **Final Analysis & System Message:** Merges all data sources, adds a system message to define the agent's identity (expert trend analyst), boundaries (rugs category, last 7 days), output format (HTML report with executive summary), and editorial judgment. Generates comprehensive HTML trend reports structured like a Wayfair insight deck

**Result:** Complete end-to-end agent that transforms user queries into structured trend intelligence. Successfully tested with competitor analysis on Amazon rug listings, generating detailed reports that combine RSS signals, Google search results, and live product data.

**Screenshots:**
- Step 1: ![User Intent Identifier](./screenshots/project2/step1_user_intent_identifier.png)
- Step 2: ![Simple AI Agent](./screenshots/project2/step2_simple_ai_agent.png)
- Step 3: ![RSS Workflow](./screenshots/project2/step3_rss_workflow_overview.png)
- Step 4: ![Google Search](./screenshots/project2/step4_google_overview.png)
- Step 5: ![Amazon Scraper](./screenshots/project2/step5_amazon_scraper_workflow.png)
- Step 6: ![Final Agent](./screenshots/project2/step6_final_trend_discovery_agent.png)

**Documentation & Reports:**
- [Final Trend Report](./docs/project2/final_trend_report.pdf) - Generated trend analysis report from competitor analysis
- [System Messages Management](./docs/project2/system_messages_management.pdf) - System message variations and experiments (Step 6)

**Skills learned:** Intent detection and workflow routing, RSS feed aggregation, API integration (Google Custom Search), web scraping (product/collection pages), data normalization and merging, system message design for AI agents, HTML report generation, end-to-end AI agent architecture

---

## 🧾 Repository Structure

- `workflows/` → exported n8n JSONs organized by project ([README](./workflows/README.md))
  - `workflows/project1/` → Project 1 workflows
  - `workflows/project2/` → Project 2 workflows (Market Trend Discovery Agent)
- `screenshots/` → visual documentation for all projects ([README](./screenshots/README.md))
  - `screenshots/project1/` → Project 1 specific screenshots and outputs ([README](./screenshots/project1/README.md))
  - `screenshots/project2/` → Project 2 step-by-step screenshots and final trend report ([README](./screenshots/project2/README.md))
- `docs/` → project documentation and reports ([README](./docs/README.md))
  - `docs/project1/` → Project 1 personal experience and workflow summary ([README](./docs/project1/README.md))
  - `docs/project2/` → Project 2 reports and documentation ([README](./docs/project2/README.md))

---

## 📫 Contact

**Rayyan Oumlil**  
[LinkedIn](https://www.linkedin.com/in/rayyan-oumlil-871b192b6/) • [GitHub](https://github.com/rayyan-oumlil)
