# Project 1: Moodboard Generator Agent

**Wayfair AI Automation Externship (via Extern)**  
**Student:** Rayyan Oumlil

---

## My Experience

This project was my first introduction to AI agents and n8n. I learned to build a complete workflow that transforms a simple idea like "bohemian rug" into a professional visual moodboard.

### What I Learned

**n8n** - This was completely new to me. At first, I didn't understand how to connect nodes, but after building the "Hello World" workflow, everything clicked. It's like a puzzle where each piece has its place.

**Prompt Engineering** - The key is being specific. Instead of saying "a rug", you need to say "a 5x7 bohemian jute rug in a modern living room with natural lighting". The more details you give, the better the result.

**APIs** - I understood how data travels between systems. It was abstract before, now I see how everything connects.

### The Challenges

The hardest part was when the Gemini API hit its rate limits. I had to learn error handling and add fallback solutions. It taught me the importance of planning for problems.

### The Result

I created an agent that can generate professional moodboards in seconds. This is exactly the kind of tool Wayfair's Rugs team could use to quickly validate trends.

---

## Final Workflow

Complete workflow: `Chat Input → AI Agent → Clean Prompt → HTTP Request → Parse Response → Image File`

**Files:**
- `workflows/project1/moodboard_agent.json` - Final n8n workflow
- `screenshots/project1/` - Project 1 specific screenshots and outputs

---

**Status:** ✅ Complete  
**Next:** Project 2 - Trend Discovery Agent
