# Project 4: AI Insights & Content Agent

## Overview

In this project, you'll work with a pre-built AI Insights & Content Agent and refine its logic, creativity, and tone to produce brand-aligned marketing content for Wayfair.

## Progress

### Step 1: Import and Explore ✅
- Imported the pre-built workflow JSON
- Explored workflow structure and node connections
- Renamed workflow to `Wayfair_ContentAgent`

### Step 2: Evaluate Output ✅
- ✅ Ran agent with test input (bohemian rugs from Amazon)
- ✅ Generated content output saved: `final_content_output.html`
- ✅ Created evaluation Google Doc with filled observations
- ✅ Documented first impressions and agent analysis

### Step 3: Teaching Your Agent Creative Thinking ✅
- ✅ Studying Wayfair's content and voice
  - Analysis completed: `wayfair_voice_analysis.md`
  - Blog post analyzed: "Ask an Editor: How to Flatten a Rug"
  - Instagram post analyzed: Influencer reel about Wayfair rugs
  - Google Doc created with complete analysis
  - Screenshot: `screenshots/project4/wayfair_voice_analysis_doc.png`
- ✅ Creative Translation Layer: From Insights to Ideas
  - Exercise template: `creative_translation_exercise.md`
  - Task: Transform data insights into creative marketing content
  - Completed rewriting insights as creative prompts with "why" context
- ✅ Rewriting system messages to align with Wayfair's brand voice
  - Created 4 System Message variations: `system_message_variations.md`
    - V1: Pricing Strategy Focus (Analytical + Creative Mix)
    - V2: Feature Differentiation Focus (Lifestyle Benefits)
    - V3: Messaging & Imagery Focus (Aspirational yet Relatable)
    - V4: Emerging Trends Focus (Trend Storytelling)

### Step 4: Run and Compare Creative Outputs ✅
- ✅ Tested 4 System Message variations with the same input data
- ✅ Generated comparison document with all outputs
- ✅ Google Doc created: [Project4_CreativeOutputs](https://docs.google.com/open?id=15VvEtWNNzFoyMgUbHr_xM35rNXH-MWJxvxf8NGyQojI)
- ✅ Screenshot: `screenshots/project4/system_variation_analysis_doc.png`
- ✅ Documented tone differences, content focus shifts, and notable changes
- ✅ Completed submission questions

### Step 5: Submit Your Updated AI Insights & Content Agent ✅
- ✅ Final System Message refined: `final_system_message.md`
- ✅ Generated final content output: `final_content_output.html`
- ✅ Exported final PDF report: `final_ai_insights_content_report.pdf`
- ✅ Loom video walkthrough recorded: [Workflow & Output Demo](https://www.loom.com/share/088acce7cad74119a47e76129c9a0286)
- ✅ All screenshots and documentation organized

## Test Input

**Amazon product URL:**
```
https://www.amazon.in/dp/B0C7RCH8GM/ref=sr_1_1_sspa?crid=3V6FZHL4HBL46&dib=eyJ2IjoiMSJ9.A4sr4C6VPRY8ghAgG2A7PfC2CHCqjLpNvKfDhZEnqC6m9YxshmA9kUWePaG0m5J1SWxlp6ay2f54At2AgEvIMCkE8uUB_OEnm5QmOkQi7u7D5L6RbxY29ch9w6MKXpnAhr04QvR9A-tnip7EqN_3kCXJz7EoY6_RNoR2gTCTfUoJXQy8ZP5jEs91rDJ1o4GVf3QbMy2gghRnpUZoeS6X6lWfAoGG9uoeVJKzgmkiDe9kt0zU8Dk5R0xEprH-3yNxDi3TosJ2S9jskqHkB2I8mtm70AhyaFJUcVLdASa7p6TZc8hWwN5JdApj_oawTvhJ8j79Q9qJh2sgV_E5FL1mO1w6U99S0tpsm32Yg0Je0v9IGbDb-VsWZ.6ZqRYt7zG3oRHvR4M1E3kKHt-5nrmVvZVIMu1UVXApI&dib_tag=se&keywords=bohemian+rug&qid=1760857014&sprefix=bohemian+rug%2Caps%2C230&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1
```

**Amazon collection URL:**
```
https://www.amazon.in/s?k=bohemian+rugs&crid=3V6FZHL4HBL46&sprefix=bohemian+rug%2Caps%2C230&ref=nb_sb_noss_1
```

**Test Prompt:**
```
Based on the given links, can you create content ideas Wayfair could use for marketing campaigns?
```

## Workflow

- Workflow file: `workflows/project4/wayfair_content_agent.json` (to be exported)
- Screenshot: `screenshots/project4/ai_content_agent_workflow.png` - Complete workflow visualization

## Outputs

### Generated Content Files
- **Final HTML Output:** `docs/project4/final_content_output.html` - Final blog post, insights, and Instagram caption generated from test input
  - Title: "Wayfair Rugs Content Strategy: Dream Home, Real Life"
  - Includes: Key market insights, blog post strategy with headline options, hook opening, trend explanation, competitor analysis, product integration, styling tips, and Instagram captions
  - Formatted with embedded CSS and white background, ready for display or PDF conversion
- **Final PDF Report:** `docs/project4/final_ai_insights_content_report.pdf` - Final insights and content generation report exported from n8n workflow
  - This is the PDF version of the generated content, ready for submission

### Screenshots & Documentation
- **Loom Video Walkthrough:** [https://www.loom.com/share/088acce7cad74119a47e76129c9a0286](https://www.loom.com/share/088acce7cad74119a47e76129c9a0286)
  - Screenshot: `screenshots/project4/loom_video_screenshot.png`
  - Covers the full n8n workflow, how the agent connects trend + competitor insights → creative ideas → Wayfair-ready outputs, and reflections on improvements made
- **Workflow Screenshot:** `screenshots/project4/ai_content_agent_workflow.png` - Complete workflow visualization showing all nodes and connections
- **Evaluation Document:** `screenshots/project4/evaluation_google_doc.png` - Screenshot of filled evaluation Google Doc with first impressions and agent analysis
- **Brand Voice Analysis:** `screenshots/project4/wayfair_voice_analysis_doc.png` - Screenshot of Wayfair Brand Voice Analysis Google Doc
- **System Variation Analysis:** `screenshots/project4/system_variation_analysis_doc.png` - Screenshot of the System Message variations analysis document
- **Creative Outputs Comparison:** Google Doc comparing 4 System Message variations - [Project4_CreativeOutputs](https://docs.google.com/open?id=15VvEtWNNzFoyMgUbHr_xM35rNXH-MWJxvxf8NGyQojI)
  - Includes: Comparison table with outputs from all 4 variations, tone differences, content focus shifts, and submission answers

## Submission Answers

### Question 1: Google Doc Link
✅ Submitted: https://docs.google.com/open?id=15VvEtWNNzFoyMgUbHr_xM35rNXH-MWJxvxf8NGyQojI

### Question 2: Which System Message generated content you could imagine Wayfair actually publishing and why?
**Answer:** V3 (Messaging & Imagery) generated content that feels most authentic to Wayfair's brand voice because it perfectly balances aspiration with relatability—exactly what we saw in Wayfair's blog and Instagram content. The tone is warm and inclusive ('We've all been there'), addresses real customer concerns (spills, pets, busy lives), and makes the dream home feel achievable rather than intimidating. It matches Wayfair's helpful, friendly expert persona that prioritizes lifestyle outcomes over product promotion.

### Question 3: What single phrase or instruction inside your System Message most changed the tone or focus? (Optional)
**Answer:** The phrase **'aspirational yet relatable'** fundamentally changed the output by making the content feel both inspiring and achievable. Instead of purely aspirational content that might feel unattainable, or purely practical content that lacks excitement, this instruction created content that acknowledges real life ('spills, pets, busy mornings') while still painting an aspirational picture ('your dream home, your way'). This balance is exactly what makes Wayfair's content feel human and commercial at the same time.

### Question 4: How did your system messages evolve from data-driven to creative? (Optional)
**Answer:** Initially, the system messages focused on extracting and reporting data signals (trends, competitor pricing, features). Through iteration, I shifted the focus to storytelling and emotional connection. The evolution moved from "identify trends and report them" to "transform insights into narratives that resonate with customers' real lives." Key changes included adding brand voice principles (warm, inviting, confident), emphasizing lifestyle outcomes over product features, and instructing the AI to write in Wayfair's tone—balancing aspiration with relatability. The final system message now asks the AI to think like a content strategist who understands both market data and human emotion, turning signals into stories that feel authentic to Wayfair's brand.

### Question 5: Which part of n8n feels natural to you now, and which part still challenges you? (Optional)
**Answer:** **Natural:** The visual workflow builder feels intuitive—connecting nodes, seeing data flow, and understanding the execution path. Code nodes for data manipulation and the AI Agent node for content generation are straightforward once you understand the data structure. **Challenging:** Debugging complex data transformations when data doesn't flow as expected, especially when dealing with nested JSON structures or when scraping fails and you need to trace where the data breaks. Also, understanding when to use different node types (Code vs Function vs HTTP Request) for optimal performance can still require experimentation.

### Question 6: Do you now feel confident you could build or refine another AI agent on your own?
**Answer:** Yes

