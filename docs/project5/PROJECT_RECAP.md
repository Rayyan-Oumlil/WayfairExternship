# Project Recap - Wayfair AI Automation Externship

## 1. If your project had a highlight reel, what would be on it?

The moment all three data streams converged in the Google Sheets dashboard - seeing trends, competitors, and content insights come together in real-time. Successfully recovering workflows from Docker when I lost n8n access. Fixing the JSON parsing issue and watching clean data flow through the system. Building the complete pipeline end-to-end: Agents → Supabase → n8n → Google Sheets.

---

## 2. Which skill do you feel you leveled up the most during this project? Tell us how you noticed the growth.

**Systems thinking and integration architecture.** I started by building individual agents in isolation, but when I lost n8n access and had to recover workflows from Docker, I learned about data persistence and system architecture. The OAuth and JSON parsing errors taught me that systems fail at boundaries - the connections between services are where complexity lives. By the end, I was designing with integration in mind, understanding that good system design is about creating interfaces between components, not just building features.

---

## 3. What was the hardest part — and how did you push through it?

Recovering workflows from Docker when I lost n8n access, then debugging OAuth and JSON parsing errors. I broke it down into steps: extract SQLite database, parse it, reconstruct workflows. Created Python scripts when direct export wasn't possible. For OAuth, I systematically checked redirect URIs, consent screen, test users, credentials. For JSON parsing, I built resilient error handling. The key was persistence and treating each error as a learning opportunity about how the system actually worked.

---

## 4. If you could tweak one part of the project to make it even better, what would you change — and why?

Design the data schema and dashboard structure first, then build agents to fit that system. We spent time retrofitting agent outputs to match the dashboard - if I had designed the Supabase schema and Google Sheets columns first, I could have built all agents with the same output format from the start. This taught me the importance of "system-first" thinking vs "component-first" thinking.

---

## 5. What's your project emoji?

**🚀 = launched my confidence**

This project took me from building individual tools to creating a complete, integrated system. I went from following tutorials to solving real problems. Seeing all three agents converge in the dashboard gave me confidence that I could build complex systems. The moment everything worked end-to-end was a huge confidence boost.
