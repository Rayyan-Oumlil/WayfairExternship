/**
 * Wayfair Final Presentation Automation - Custom Script
 * Based on: https://docs.google.com/presentation/d/16TjqbybHjfxPp_idwsfPpJ8mxQj1lHAH0PP5n2MQALE/edit
 * 
 * This script creates slides matching the exact structure of your presentation template
 */

// ============================================
// MAIN FUNCTION - Run this to create all slides
// ============================================
function createCompletePresentation() {
  const presentation = SlidesApp.getActivePresentation();
  
  // Clear existing slides except the first one (optional)
  // const slides = presentation.getSlides();
  // for (let i = slides.length - 1; i > 0; i--) {
  //   slides[i].remove();
  // }
  
  // Create all slides in order
  createCoverSlide(presentation);
  createExecutiveSummary(presentation);
  createMoodboardAgentSlide(presentation);
  createTrendDiscoveryAgentSlide(presentation);
  createCompetitorMonitoringAgentSlide(presentation);
  createAIInsightsAgentSlide(presentation);
  createDashboardSlide(presentation);
  createReflectionsSlide(presentation);
  createThankYouSlide(presentation);
  
  Logger.log('Presentation created successfully!');
}

// ============================================
// SLIDE 1: Cover Slide
// ============================================
function createCoverSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  
  // Add title
  const titleBox = slide.insertTextBox('Wayfair Rugs Market Intelligence: AI Agent Demo');
  titleBox.setLeft(50);
  titleBox.setTop(150);
  titleBox.setWidth(650);
  titleBox.setHeight(80);
  
  const titleText = titleBox.getText();
  titleText.getTextStyle()
    .setFontSize(32)
    .setBold(true)
    .setForegroundColor('#1a73e8');
  
  // Add name placeholder
  const nameBox = slide.insertTextBox('Name: [Your Name]');
  nameBox.setLeft(50);
  nameBox.setTop(280);
  nameBox.setWidth(300);
  
  // Add email placeholder
  const emailBox = slide.insertTextBox('Email Id: [your.email@example.com]');
  emailBox.setLeft(50);
  emailBox.setTop(320);
  emailBox.setWidth(400);
  
  // Note: Image needs to be added manually or via insertImage() with image URL
  // slide.insertImage(imageUrl).setLeft(400).setTop(250);
}

// ============================================
// SLIDE 2: Executive Summary
// ============================================
function createExecutiveSummary(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  // Set title
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Executive Summary\nOverview of Market Intelligence Agents');
  
  // Create body content with emojis
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'Help Wayfair\'s Rugs category team automate trend discovery, monitor competitors, and generate content ideas.\n\n' +
    '🧠 My Solution\n' +
    'Built 3 connected AI agents that feed into one Market Intelligence Dashboard.\n\n' +
    '⚙️ Core Outputs\n' +
    '✓ Trend Discovery Agent - Sample Output Link\n' +
    '✓ Competitor Monitoring Agent - Sample Output Link\n' +
    '✓ AI Insights & Content Agent - Sample Output Link\n' +
    '✓ Integrated Dashboard - Sample Output Link\n\n' +
    '🔍 Key Insights\n' +
    '• Eco-friendly rugs trending ↑30%\n' +
    '• Washable rugs expanding under $200\n' +
    '• Geometric patterns gaining traction\n\n' +
    '🧠 Future Improvements\n' +
    '• [Add your improvement suggestions here]'
  );
  
  // Format the text
  const textStyle = bodyText.getTextStyle();
  textStyle.setFontSize(14);
}

// ============================================
// SLIDE 3: Agent 1 - Moodboard Generator
// ============================================
function createMoodboardAgentSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Agent 1: Moodboard Generator\nFrom Design Prompt → AI-Curated Visual Mood');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'To transform simple text prompts into AI-generated moodboards that reflect emerging rug design styles.\n\n' +
    '🧠 Input Prompt Example\n' +
    '"Bohemian rugs, neutral tones"\n\n' +
    '⚠️ Keep in Mind / Input Notes\n' +
    '• Keep prompts short (under 10 words) and specific\n' +
    '• Use clear style + material keywords (e.g., color, texture, tone)\n' +
    '• Avoid subjective adjectives like "beautiful" or "nice"\n' +
    '• 🧩 Free-Tier Limitation: Google Gemini\'s image generation API currently allows up to 20 image generations per day (free version)\n\n' +
    '📄 View JSON Workflow\n' +
    '🖼️ View Sample Moodboard\n\n' +
    'Output Example:\n' +
    '[Image placeholder - add manually]'
  );
}

// ============================================
// SLIDE 4: Trend Discovery Agent
// ============================================
function createTrendDiscoveryAgentSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Agent 2: Trend Discovery Agent\nFrom Amazon URLs → Comprehensive Trend Analysis');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'Detects emerging product trends and attributes like size, color, material, and pattern by analyzing RSS feeds, Google Search results, and Amazon product data.\n\n' +
    '🧠 Input Prompt Example\n' +
    'Amazon product url: [Full Product URL]\n' +
    'Amazon collection url: [Full Collection URL]\n' +
    'Task: Find key product trends and attributes like size, color, material, and pattern.\n\n' +
    '⚠️ Keep in Mind / Input Notes\n' +
    '• Provide valid Amazon product and collection URLs\n' +
    '• The agent scrapes live data, so results may vary\n' +
    '• Processing time: 2-3 minutes for comprehensive analysis\n\n' +
    '📄 View JSON Workflow\n' +
    '🖼️ View Sample Output\n\n' +
    '💡 Improvements / Expansion Opportunities\n' +
    '• Currently scrapes Amazon only — can be expanded to include Walmart or IKEA\n' +
    '• Could add sentiment analysis for customer reviews\n' +
    '• Integration with Wayfair\'s internal product catalog for trend validation'
  );
}

// ============================================
// SLIDE 5: Competitor Monitoring Agent
// ============================================
function createCompetitorMonitoringAgentSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Agent 3: Competitor Monitoring Agent\nFrom Competitor URLs → Competitive Intelligence Report');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'Tracks competitor launches, pricing strategies, and messaging to identify gaps and opportunities for Wayfair\'s Rugs category.\n\n' +
    '🧠 Input Prompt Example\n' +
    'Amazon product url: [Full Product URL]\n' +
    'Amazon collection url: [Full Collection URL]\n' +
    'Task: Extract competitor highlights — price, rating, PDP messaging, and whitespace opportunities.\n\n' +
    '⚠️ Keep in Mind / Input Notes\n' +
    '• Scrapes both Wayfair and Amazon product data\n' +
    '• Limited to first 10 pages of search results\n' +
    '• May encounter bot protection on some sites\n\n' +
    '📄 View JSON Workflow\n' +
    '🖼️ View Sample Output\n\n' +
    '💡 Improvements / Expansion Opportunities\n' +
    '• Adding pagination can enhance completeness of competitor data\n' +
    '• Could integrate with price tracking APIs for real-time monitoring\n' +
    '• Add automated alerts for significant price changes or new product launches'
  );
}

// ============================================
// SLIDE 6: AI Insights & Content Agent
// ============================================
function createAIInsightsAgentSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Agent 4: AI Insights & Content Agent\nFrom Trend Data → Brand-Aligned Marketing Content');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'Converts trend signals and competitor data into creative marketing content (blog posts, Instagram captions, campaign ideas) aligned with Wayfair\'s brand voice.\n\n' +
    '🧠 Input Prompt Example\n' +
    'Amazon product url: [Same URLs as P2/P3]\n' +
    'Amazon collection url: [Same URLs as P2/P3]\n' +
    'Task: Generate two creative ideas (one blog, one social caption) based on identified trends.\n\n' +
    '⚠️ Keep in Mind / Input Notes\n' +
    '• Uses refined system message to match Wayfair\'s brand voice\n' +
    '• Content balances aspiration with relatability\n' +
    '• Output includes HTML formatting for easy publishing\n\n' +
    '📄 View JSON Workflow\n' +
    '🖼️ View Sample Output\n\n' +
    '💡 Improvements / Expansion Opportunities\n' +
    '• Could connect to Wayfair\'s internal SKU data for deeper insights\n' +
    '• Add A/B testing framework for content performance\n' +
    '• Integration with Wayfair\'s CMS for direct content publishing'
  );
}

// ============================================
// SLIDE 7: Market Intelligence Dashboard
// ============================================
function createDashboardSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Market Intelligence Dashboard\nBringing All Agents Together → Live Insights for Wayfair\'s Rugs Team');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective:\n' +
    'Unified dashboard that automatically collects, processes, and visualizes insights from all three agents, providing real-time market intelligence for Wayfair\'s Rugs category team.\n\n' +
    '⚙️ How This Works\n' +
    '1. Agents store outputs in Supabase database\n' +
    '2. n8n workflow processes HTML reports and converts to structured JSON\n' +
    '3. Google Gemini extracts key insights and standardizes data\n' +
    '4. Google Sheets dashboard updates automatically with new insights\n' +
    '5. Executive Summary tab synthesizes all data with built-in formulas\n\n' +
    '⚠️ Keep in Mind / Implementation Notes\n' +
    '• Dashboard updates automatically when agents run\n' +
    '• Data flows: Supabase → n8n → Google Sheets\n' +
    '• Each agent maintains one row that updates on each run\n' +
    '• Dashboard link: https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit\n\n' +
    '📄 View JSON Workflow\n' +
    '🖼️ View Dashboard\n\n' +
    '💡 Improvements / Expansion Opportunities\n' +
    '• Add email/Slack alerts when new insights are detected\n' +
    '• Integrate with Wayfair\'s internal data warehouse\n' +
    '• Add predictive analytics for trend forecasting'
  );
  
  // Add hyperlink to dashboard
  const dashboardLink = bodyText.find('https://docs.google.com/spreadsheets');
  if (dashboardLink) {
    dashboardLink.getTextStyle().setLinkUrl('https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit');
  }
}

// ============================================
// SLIDE 8: Reflections & Future Improvements
// ============================================
function createReflectionsSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Reflections & Future Improvements\nWhat I Learned and How I Can Make It Better');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🧭 Key Learnings\n\n' +
    '• I learned how AI can translate market signals into actionable insights for category teams.\n\n' +
    '• I understood how data informs design, assortment, and pricing decisions.\n\n' +
    '• I gained hands-on experience building connected AI agents and dashboards.\n\n' +
    '• I discovered that systems work when designed to work together — modularity enables both independence and integration.\n\n' +
    '🚀 Future Improvements / Next Steps\n\n' +
    '• I plan to integrate SKU performance metrics to connect trends with real sales data.\n\n' +
    '• I\'d like to expand data sources to include social media for better trend discovery.\n\n' +
    '• I want to refine AI prompts for more brand-aligned and creative content suggestions.\n\n' +
    '• I would add error handling and observability from day one for better system resilience.'
  );
}

// ============================================
// SLIDE 9: Thank You
// ============================================
function createThankYouSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Thank You');
  
  // Add optional links or message
  const messageBox = slide.insertTextBox('Questions?\n\nGitHub: https://github.com/Rayyan-Oumlil/WayfairExternship\nDashboard: [Link to dashboard]');
  messageBox.setLeft(200);
  messageBox.setTop(200);
  messageBox.setWidth(400);
  
  const messageText = messageBox.getText();
  messageText.getTextStyle()
    .setFontSize(18)
    .setForegroundColor('#5f6368');
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Update agent slide with custom data
 */
function updateAgentSlide(slideNumber, agentData) {
  const presentation = SlidesApp.getActivePresentation();
  const slides = presentation.getSlides();
  
  if (slideNumber > slides.length) {
    Logger.log('Slide number out of range');
    return;
  }
  
  const slide = slides[slideNumber - 1];
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  
  if (body) {
    const bodyText = body.asShape().getText();
    bodyText.setText(
      `🎯 Objective:\n${agentData.objective}\n\n` +
      `🧠 Input Prompt Example\n${agentData.inputExample}\n\n` +
      `⚠️ Keep in Mind / Input Notes\n${agentData.notes}\n\n` +
      `📄 View JSON Workflow\n🖼️ View Sample Output\n\n` +
      `💡 Improvements / Expansion Opportunities\n${agentData.improvements}`
    );
  }
}

/**
 * Add hyperlinks to workflow and output links
 */
function addHyperlinksToSlide(slideNumber, workflowLink, outputLink) {
  const presentation = SlidesApp.getActivePresentation();
  const slides = presentation.getSlides();
  const slide = slides[slideNumber - 1];
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  
  if (body) {
    const bodyText = body.asShape().getText();
    
    // Find and link "View JSON Workflow"
    const workflowText = bodyText.find('View JSON Workflow');
    if (workflowText && workflowLink) {
      workflowText.getTextStyle().setLinkUrl(workflowLink);
    }
    
    // Find and link "View Sample Output"
    const outputText = bodyText.find('View Sample Output');
    if (outputText && outputLink) {
      outputText.getTextStyle().setLinkUrl(outputLink);
    }
  }
}

// ============================================
// BATCH UPDATE FUNCTION
// ============================================

/**
 * Update all agent slides with data from your workflows
 * Customize this with your actual agent data
 */
function updateAllAgentSlides() {
  const agentData = {
    trendDiscovery: {
      objective: 'Your actual objective',
      inputExample: 'Your actual input example',
      notes: 'Your actual notes',
      improvements: 'Your actual improvements'
    },
    competitorMonitoring: {
      objective: 'Your actual objective',
      inputExample: 'Your actual input example',
      notes: 'Your actual notes',
      improvements: 'Your actual improvements'
    },
    aiInsights: {
      objective: 'Your actual objective',
      inputExample: 'Your actual input example',
      notes: 'Your actual notes',
      improvements: 'Your actual improvements'
    }
  };
  
  // Update slides 4, 5, 6
  updateAgentSlide(4, agentData.trendDiscovery);
  updateAgentSlide(5, agentData.competitorMonitoring);
  updateAgentSlide(6, agentData.aiInsights);
}

