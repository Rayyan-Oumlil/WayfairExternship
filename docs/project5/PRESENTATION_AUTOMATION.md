# Automating Presentation Creation with Apps Script & Gemini

## Overview

This guide shows how to automate the creation of your final presentation using:
- **Google Apps Script** (JavaScript) - To create and format slides programmatically
- **Google Gemini API** - To generate slide content based on your agent outputs
- **Google Slides API** - To manipulate presentation structure

---

## Option 1: Google Apps Script (Recommended)

### Setup

1. **Open Google Slides** and create a new presentation (or use the template)
2. **Go to Extensions → Apps Script**
3. **Create a new script** with the following structure

### Basic Script Structure

```javascript
/**
 * Wayfair Final Presentation Automation
 * Creates slides from agent data and outputs
 */

function createFinalPresentation() {
  const presentation = SlidesApp.getActivePresentation();
  
  // Clear existing slides (optional)
  // const slides = presentation.getSlides();
  // slides.forEach((slide, index) => {
  //   if (index > 0) slide.remove(); // Keep first slide
  // });
  
  // Create slides programmatically
  createCoverSlide(presentation);
  createExecutiveSummary(presentation);
  createAgentSlides(presentation);
  createDashboardSlide(presentation);
  createReflectionsSlide(presentation);
  createThankYouSlide(presentation);
}

function createCoverSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  
  // Add title
  const titleBox = slide.insertTextBox('Wayfair Rugs Market Intelligence: AI Agent Demo');
  titleBox.setLeft(50);
  titleBox.setTop(100);
  titleBox.setWidth(600);
  titleBox.setHeight(100);
  
  // Format title
  const titleText = titleBox.getText();
  titleText.getTextStyle()
    .setFontSize(36)
    .setBold(true)
    .setForegroundColor('#1a73e8');
  
  // Add name and email
  const infoBox = slide.insertTextBox('Your Name\nYour Email\nCohort: [Your Cohort]');
  infoBox.setLeft(50);
  infoBox.setTop(250);
  infoBox.setWidth(400);
  
  const infoText = infoBox.getText();
  infoText.getTextStyle()
    .setFontSize(18)
    .setForegroundColor('#5f6368');
}

function createExecutiveSummary(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Executive Summary');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const summaryText = body.asShape().getText();
  
  summaryText.setText(
    'Objective: [Your objective]\n\n' +
    'Solution: [Number] AI agents built\n\n' +
    'Core Outputs:\n' +
    '• Trend Discovery Agent\n' +
    '• Competitor Monitoring Agent\n' +
    '• AI Insights & Content Agent\n' +
    '• Integrated Dashboard\n\n' +
    'Key Insights: [Top findings]\n\n' +
    'Future Improvements: [Next steps]'
  );
  
  // Format bullet points
  const textStyle = summaryText.getTextStyle();
  textStyle.setFontSize(14);
}

function createAgentSlides(presentation) {
  const agents = [
    {
      name: 'Trend Discovery Agent',
      objective: 'Detects emerging product trends and attributes',
      inputExample: 'Amazon product URL + Collection URL',
      improvements: 'Can be expanded to include Walmart or IKEA'
    },
    {
      name: 'Competitor Monitoring Agent',
      objective: 'Tracks competitor launches and pricing gaps',
      inputExample: 'Amazon Product URL + Collection URL',
      improvements: 'Adding pagination can enhance completeness'
    },
    {
      name: 'AI Insights & Content Agent',
      objective: 'Converts trends and competitor data into campaign ideas',
      inputExample: 'Same URLs as P2/P3',
      improvements: 'Could connect to Wayfair\'s internal SKU data'
    }
  ];
  
  agents.forEach((agent, index) => {
    createAgentSlide(presentation, agent, index + 4); // Slides 4, 5, 6
  });
}

function createAgentSlide(presentation, agent, slideNumber) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText(`Slide ${slideNumber}: ${agent.name}`);
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    `🎯 Objective:\n${agent.objective}\n\n` +
    `🧠 Input Prompt Example:\n${agent.inputExample}\n\n` +
    `💡 Improvements:\n${agent.improvements}`
  );
  
  // Add attachment placeholder
  const attachmentBox = slide.insertTextBox('📎 Attachments:\n• JSON Workflow (Google Drive link)\n• Output Sample (PDF link)');
  attachmentBox.setLeft(50);
  attachmentBox.setTop(350);
  attachmentBox.setWidth(500);
}

function createDashboardSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Slide 7: Market Intelligence Dashboard');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🎯 Objective: Unified dashboard that brings all agents together\n\n' +
    '⚙️ How It Works:\n' +
    '• Agents store outputs in Supabase\n' +
    '• n8n processes and structures data\n' +
    '• Google Sheets displays real-time insights\n\n' +
    '📎 Dashboard Link:\n' +
    'https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit'
  );
}

function createReflectionsSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Slide 8: Reflections & Future Improvements');
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  const bodyText = body.asShape().getText();
  
  bodyText.setText(
    '🧭 Key Learnings:\n' +
    '• [Your learning 1]\n' +
    '• [Your learning 2]\n' +
    '• [Your learning 3]\n\n' +
    '🚀 Future Improvements:\n' +
    '• [Improvement 1]\n' +
    '• [Improvement 2]'
  );
}

function createThankYouSlide(presentation) {
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
  
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText('Thank You');
  
  // Add optional links
  const linkBox = slide.insertTextBox('Questions?\n\nGitHub: [Your repo]\nDemo: [Your demo link]');
  linkBox.setLeft(200);
  linkBox.setTop(200);
  linkBox.setWidth(400);
}
```

---

## Option 2: Using Gemini API to Generate Content

### Setup Gemini API

1. **Get Gemini API Key** (if you don't have one)
2. **Add to Apps Script** as a property:

```javascript
function setGeminiApiKey() {
  PropertiesService.getScriptProperties().setProperty('GEMINI_API_KEY', 'YOUR_API_KEY');
}
```

### Generate Content with Gemini

```javascript
function generateSlideContentWithGemini(agentName, agentData) {
  const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
  const prompt = `
    Create professional slide content for a Wayfair AI Externship presentation.
    
    Agent: ${agentName}
    Objective: ${agentData.objective}
    Input Example: ${agentData.inputExample}
    Output: ${agentData.output}
    
    Format the response as:
    - Objective (1-2 sentences)
    - Input Prompt Example
    - Keep in Mind / Input Notes
    - Improvements (2-3 bullet points)
    
    Keep it concise and professional, like a consultant presenting to Wayfair.
  `;
  
  const payload = {
    contents: [{
      parts: [{
        text: prompt
      }]
    }]
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    Logger.log('Error calling Gemini API: ' + error);
    return null;
  }
}

function createAgentSlideWithGemini(presentation, agentName, agentData) {
  // Generate content with Gemini
  const generatedContent = generateSlideContentWithGemini(agentName, agentData);
  
  if (!generatedContent) {
    // Fallback to manual content
    createAgentSlide(presentation, agentData, 4);
    return;
  }
  
  // Create slide with Gemini-generated content
  const slide = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  const title = slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE);
  title.asShape().getText().setText(agentName);
  
  const body = slide.getPlaceholder(SlidesApp.PlaceholderType.BODY);
  body.asShape().getText().setText(generatedContent);
}
```

---

## Option 3: Hybrid Approach (Recommended)

Combine Apps Script structure with Gemini content generation:

```javascript
function createCompletePresentation() {
  const presentation = SlidesApp.getActivePresentation();
  
  // Agent data from your workflows
  const agentData = {
    trendDiscovery: {
      name: 'Trend Discovery Agent',
      objective: 'Detects emerging product trends and attributes like size, color, material, and pattern',
      inputExample: 'Amazon product URL + Collection URL',
      output: 'HTML trend report with executive summary',
      improvements: 'Can be expanded to include Walmart or IKEA'
    },
    competitorMonitoring: {
      name: 'Competitor Monitoring Agent',
      objective: 'Tracks competitor launches and pricing gaps',
      inputExample: 'Amazon Product URL + Collection URL',
      output: 'HTML competitive intelligence report',
      improvements: 'Adding pagination can enhance completeness'
    },
    aiInsights: {
      name: 'AI Insights & Content Agent',
      objective: 'Converts trends and competitor data into campaign ideas',
      inputExample: 'Same URLs as P2/P3',
      output: 'Blog posts, Instagram captions, content ideas',
      improvements: 'Could connect to Wayfair\'s internal SKU data'
    }
  };
  
  // Create slides
  createCoverSlide(presentation);
  
  // Generate Executive Summary with Gemini
  const execSummary = generateExecutiveSummaryWithGemini(agentData);
  createExecutiveSummarySlide(presentation, execSummary);
  
  // Create agent slides (with optional Gemini enhancement)
  Object.values(agentData).forEach((agent, index) => {
    const slideContent = generateSlideContentWithGemini(agent.name, agent);
    createAgentSlideFromContent(presentation, agent.name, slideContent || agent, index + 4);
  });
  
  // Create dashboard and closing slides
  createDashboardSlide(presentation);
  createReflectionsSlide(presentation);
  createThankYouSlide(presentation);
}

function generateExecutiveSummaryWithGemini(agentData) {
  const apiKey = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
  const prompt = `
    Create an Executive Summary for a Wayfair AI Externship presentation.
    
    Agents built:
    1. ${agentData.trendDiscovery.name} - ${agentData.trendDiscovery.objective}
    2. ${agentData.competitorMonitoring.name} - ${agentData.competitorMonitoring.objective}
    3. ${agentData.aiInsights.name} - ${agentData.aiInsights.objective}
    
    Format as:
    - Objective (1 sentence)
    - Solution (number of agents and collective function)
    - Core Outputs (list of agents with brief descriptions)
    - Key Insights (2-3 top findings)
    - Future Improvements (1-2 next steps)
    
    Keep it professional and concise, like a consultant's executive summary.
  `;
  
  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };
  
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    const result = JSON.parse(response.getContentText());
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    Logger.log('Error: ' + error);
    return null;
  }
}
```

---

## How to Use

1. **Open your Google Slides presentation** (or create a new one)
2. **Go to Extensions → Apps Script**
3. **Paste the script** (choose Option 1, 2, or 3)
4. **If using Gemini**, run `setGeminiApiKey()` once to set your API key
5. **Run `createCompletePresentation()`** or individual functions
6. **Review and customize** the generated slides

---

## Customization

- **Update agent data** with your actual agent information
- **Modify slide layouts** using `SlidesApp.PredefinedLayout`
- **Add images** using `slide.insertImage(imageUrl)`
- **Format text** using `TextStyle` methods
- **Add hyperlinks** using `TextRange.setLinkUrl()`

---

## Next Steps

1. Share your presentation template/link so I can analyze the design
2. I'll create a customized script based on your specific slide structure
3. We can integrate it with your agent outputs from Supabase/Google Sheets

