# Project 5: Integrating Agents into the Market Intelligence Dashboard

## Overview

In this project, you'll unify everything you've built: trends, competitors, and AI insights into a single Market Intelligence Dashboard. This is where your agents stop working in isolation and start powering real business decisions. You'll connect live data pipelines, automate updates, and design a Google Sheets dashboard that delivers instant, actionable intelligence for Wayfair's Rugs team. To wrap it all up, you'll also create a presentation that highlights your dashboard, key insights, and the story your data tells.

## Why This, Why Now?

This is where everything you've built finally comes alive.

Over the past projects, you've taught your agents to collect, analyze, and create: identifying user intent, scraping market data, spotting competitor patterns, and turning insights into ideas.

Now it's time to connect every piece into a living business system: one that helps Wayfair's team see market movement, spot gaps, and act faster.

In this project, you'll transform your workflow into a real-time intelligence dashboard and present your findings as a strategic business story.

**Now, you'll learn to think and present like a strategist.**

Wayfair teams use dashboards like these to:
- Track emerging product trends and pricing shifts
- Monitor competitors' assortment and messaging
- Identify whitespace opportunities before they hit the mainstream

By the end, you'll have a working AI-driven market intelligence system and the confidence to explain its business impact.

## Project Breakdown

This project is divided into two steps that combine integration and strategic storytelling.

| Step | Estimated Time | Modules | Tasks |
|------|----------------|---------|-------|
| Step 1: Merging Trend, Competitor, and Insight Pipelines | 2 hours | 4 parts | 5 parts |
| Step 2: Presenting Business Impact | 1.5 hours | 1 | 1 |

### Step 1 Quick Checklist

- [ ] Part 1: Create Supabase account (15 min)
- [ ] Part 2: Create `agent_output` table in Supabase
- [ ] Part 3: Convert Project 2 to HTML output
- [ ] Part 4: Connect Project 2 to Supabase
- [ ] Part 5: Connect Projects 3 & 4 to Supabase

## What Are You Working Towards?

By the end of this project, you'll have:
- A live Google Sheets dashboard that visualizes user intent, competitor, trend, and content insights
- A 5–7 minute Loom presentation that explains your system and its implications for Wayfair's business strategy

You'll connect the dots between data and decisions, showing how intelligence translates into real impact.

## Progress

### Step 1: Merging Trend, Competitor, and Insight Pipelines ⏳
**Estimated time:** 2 hours

**Objective:**
In this step, you'll connect all your previous workflows: from trend discovery and competitor monitoring to content generation, into one live pipeline. You'll set up a Supabase database to store and sync your agent's outputs, link it with n8n, and validate that all data flows correctly into your Google Sheets dashboard. By the end of this step, your entire ecosystem will be connected and automated, ready to deliver live insights, benchmark data, and creative outputs in a single place.

#### Part 1: Create Your Supabase Account (15 minutes)

**Why:** Supabase gives your agents memory - a reliable space to store, recall, and build upon what they learn.

**Steps:**
1. ✅ Go to https://supabase.com and click "Get started" → "Sign up with email"
2. ✅ Enter email & password, submit
3. ✅ Confirm your email (check inbox/spam for verification link)
4. ✅ Create New Organization:
   - Name: Extern (or your preferred name)
   - Type: Personal or Educational
   - Plan: Free ($0/month)
5. ✅ Create New Project:
   - Organization: Extern (pre-selected)
   - Project Name: Wayfair
   - Database password: Set strong password (save it securely - you'll need it later)
   - Region: Closest to you (or Americas)
   - Click "Create project"
6. ✅ Wait for provisioning (takes ~1 minute)
7. ✅ Familiarize with dashboard (Database, Auth, API, Storage menus)

**Status:** ⏳ Not started

#### Part 2: Create the Table in Supabase

**Steps:**
1. ✅ Log in to Supabase → Wayfair Project
2. ✅ Go to Table Editor → Create New Table
3. ✅ Table name: `agent_output`
4. ✅ Keep auto-generated `id` column (Primary Key)
5. ✅ Delete all other columns
6. ✅ Click Save
7. ✅ Add 3 new columns:

| Column Name | Data Type | Purpose |
|------------|-----------|---------|
| `output_text` | text | Stores the final HTML output of your agent |
| `agentId` | int2 | Identifies which project the data belongs to |
| `input_text` | text | Stores the original input or prompt sent to the agent |

8. ✅ Confirm structure: Should have 4 columns total (`id`, `output_text`, `agentId`, `input_text`)

![Supabase Table Editor](screenshots/project5/supabase_table_editor.png)
*The `agent_output` table structure with data from all 3 agents*

**Status:** ✅ Completed

#### Part 3: Align Your n8n Workflows

**Why:** Standardize output format across all projects. Project 2 currently exports PDF, but needs HTML output like Projects 3 and 4.

**Steps for Project 2:**
1. ✅ Open Project 2 workflow in n8n
2. ✅ Locate final output branch (PDF generation nodes)
3. ✅ Replace PDF nodes with HTML nodes:
   - Copy Code + HTML Output nodes from Project 3 or 4
   - Paste into Project 2 canvas after final analysis node
   - Connect: AI Agent → Code → HTML Output
4. ✅ Rename last node to "See HTML Output Here"
5. ✅ Ensure expression: `{{ $json.cleaned_minified_html }}`
6. ✅ Test workflow - should show HTML preview in n8n

**Status:** ⏳ Not started

#### Part 4: Wire Up n8n to Supabase (Project 2)

**Steps:**
1. ✅ **Add Code Node** (after "Analyze All Data" agent):
   - Mode: Run Once for All Items
   - Language: JavaScript
   - Code:
   ```javascript
   // Loop over input items and add a new field called 'agent-id' to each JSON object
   for (const item of $input.all()) {
     item.json["agent_id"] = 2;
     item.json["input"] = $('When chat message received').first().json.chatInput;
   }
   return $input.all();
   ```

2. ✅ **Add Supabase Node (Get a Row)**:
   - Action: Get a row
   - Resource: Row
   - Operation: Get
   - Table: `agent_output`
   - Select Conditions:
     - Field: `agentId` (Integer)
     - Value: `{{ $json.agent_id }}`

3. ✅ **Add If Node**:
   - Connect: Supabase (Get a Row) → If Node
   - Condition:
     - Left Side: `{{ $json.agentId }}`
     - Operator: Equals (=)
     - Right Side: `2`

4. ✅ **Add Supabase (Update a Row) Node** (True path):
   - Resource: Row
   - Operation: Update
   - Table: `agent_output`
   - Select Type: Build Manually
   - Must Match: Any Select Condition
   - Select Conditions:
     - Field: `agentId` (integer)
     - Condition: Equals
     - Value: `2`
   - Data to Send: Define Below for Each Column
   - Fields:
     | Field Name | Type | Field Value |
     |------------|------|-------------|
     | `output_text` | string | `{{ $('Code').item.json.output }}` |
     | `agentId` | integer | `2` |
     | `input_text` | string | `{{ $('Code').item.json.input }}` |

5. ✅ **Add Supabase (Create a Row) Node** (False path):
   - Resource: Row
   - Operation: Create
   - Table: `agent_output`
   - Data to Send: Define Below for Each Column
   - Fields:
     | Field Name | Type | Field Value |
     |------------|------|-------------|
     | `output_text` | string | `{{ $('Code').item.json.output }}` |
     | `agentId` | integer | `2` |
     | `input_text` | string | `{{ $('Code').item.json.input }}` |

6. ✅ **Connect Supabase Credentials**:
   - **Step 1: In Supabase**
     - Go to your project → Settings → API (or Data Keys)
     - Copy your Project URL under "Data API"
   - **Step 2: Copy your Secret Key**
     - Under the same menu → scroll to "Service Role Key" under API Keys
     - Click "Reveal" → Copy the key
   - **Step 3: In n8n**
     - Open any Supabase node → Click "Create New Credential"
     - Host: Paste your Supabase Project URL
     - Service Role Secret: Paste the Service Role Key you copied
     - Click "Save" → n8n will automatically test and confirm your connection
   - **Step 4: Verify**
     - Ensure correct Supabase account is selected in all 3 Supabase nodes in the Project 2 workflow

**Status:** ✅ Completed

#### Part 5: Connect Projects 3 and 4 to Supabase
**Estimated time:** 30 minutes

**Objective:**
Connect Projects 3 and 4 to Supabase using the same pattern as Project 2, but with different agent IDs so each project stores data in its own unique slot.

**Steps for Project 3:**

1. ✅ **Update Code Node** (after "Analyze All Data" or final AI agent):
   - Find the line: `item.json["agent_id"] = 2;`
   - Change to: `item.json["agent_id"] = 3;`
   - Keep everything else the same

2. ✅ **Update Supabase (Get a Row) Node**:
   - Select Conditions:
     - Field: `agentId` (Integer)
     - Value: `{{ $json.agent_id }}` (should resolve to 3)

3. ✅ **Update If Node**:
   - Condition:
     - Left Side: `{{ $json.agentId }}`
     - Operator: Equals (=)
     - Right Side: `3` (changed from 2)

4. ✅ **Update Supabase (Update a Row) Node** (True path):
   - Select Conditions:
     - Field: `agentId` (integer)
     - Condition: Equals
     - Value: `3` (changed from 2)
   - Fields to Send:
     | Field Name | Type | Field Value |
     |------------|------|-------------|
     | `output_text` | string | `{{ $('Code in JavaScript').item.json.output }}` |
     | `agentId` | integer | `3` (changed from 2) |
     | `input_text` | string | `{{ $('Code in JavaScript').item.json.input }}` |

5. ✅ **Update Supabase (Create a Row) Node** (False path):
   - Fields to Send:
     | Field Name | Type | Field Value |
     |------------|------|-------------|
     | `output_text` | string | `{{ $('Code in JavaScript').item.json.output }}` |
     | `agentId` | integer | `3` (changed from 2) |
     | `input_text` | string | `{{ $('Code in JavaScript').item.json.input }}` |

**Steps for Project 4:**

1. ✅ **Update Code Node**:
   - Find: `item.json["agent_id"] = 2;` or `item.json["agent_id"] = 3;`
   - Change to: `item.json["agent_id"] = 4;`

2. ✅ **Update Supabase (Get a Row) Node**:
   - Value: `{{ $json.agent_id }}` (should resolve to 4)

3. ✅ **Update If Node**:
   - Right Side: `4` (changed from 2 or 3)

4. ✅ **Update Supabase (Update a Row) Node**:
   - Select Conditions Value: `4`
   - Fields to Send `agentId`: `4`

5. ✅ **Update Supabase (Create a Row) Node**:
   - Fields to Send `agentId`: `4`

**Testing:**
- Run Project 3 workflow → Should create/update row with `agentId = 3`
- Run Project 4 workflow → Should create/update row with `agentId = 4`
- Check Supabase → Should see 3 rows total (one for each agent: 2, 3, 4)

**Agent ID Reference:**
| agentId | Project | Purpose |
|---------|---------|----------|
| 2 | Project 2 | Trend Discovery Agent |
| 3 | Project 3 | Competitor Monitoring Agent |
| 4 | Project 4 | Content Insights Agent |

**Status:** 
- ✅ Project 2 connected (agentId = 2) - Working and exporting data
- ✅ Project 3 connected (agentId = 3) - Working and exporting data
- ✅ Project 4 connected (agentId = 4) - Working and exporting data

**Screenshots:**
- ![Supabase Table Editor](screenshots/project5/supabase_table_editor.png) - Shows the `agent_output` table with data from all 3 agents (agentId 2, 3, 4)
- ![Supabase Integration Nodes](screenshots/project5/supabase_integration_nodes.png) - Shows the Supabase nodes (Get a row, If, Update a row, Create a row) integrated into the workflow

### Step 2: Google Sheets Dashboard Integration ⏳
**Estimated time:** 2 hours

**Objective:**
Connect Supabase data to Google Sheets to create a live Market Intelligence Dashboard that visualizes insights from all three agents.

#### Part 1: Create Google Cloud Console Account ⏳
**Estimated time:** 20 minutes

**Why This:**
Before your AI agent can write data into Google Sheets, it needs permission granted through Google Cloud Console. You'll set up your free account, enable the Google Sheets API, and get your Client ID and Client Secret.

**Steps:**

1. **Go to Google Cloud Console**
   - Open https://console.cloud.google.com/
   - Click "Get started for free" and create a personal Google Cloud account using your Gmail ID
   - You'll receive $300 in free credits (more than enough for this project)
   - Once your account is ready, you'll land on the Google Cloud Console dashboard

2. **Create a New Project**
   - In the top bar, click the Project Selector dropdown
   - Choose "New Project"
   - Give it a name: "Wayfair Agent" (recommended for clarity)
   - Click "Create"
   - Once the project is ready, click "Select Project" to open it

3. **Enable the Google Sheets API**
   - Use the search bar at the top to look for "Google Sheets API"
   - Select it from the list
   - Click "Enable"
   - You'll be redirected to a page confirming it's active

4. **Create OAuth Credentials**
   - In the left sidebar, navigate to **APIs & Services → Credentials**
   - Click **+ Create Credentials → OAuth Client ID**
   - If prompted to configure a consent screen:
     - Choose **External** and click **Create**
     - Add an App Name (like "Wayfair Agent Integration") and your email
     - Click **Save and Continue**
   - Go back to **Credentials** and create an OAuth Client ID
   - Under **Application Type**, select **Web Application**
   - Name it something simple like "n8n Google Sheets Integration"
   - Scroll to **Authorized redirect URIs** and paste this exactly:
     ```
     https://app.n8n.cloud/rest/oauth2-credential/callback
     ```
   - Click **Create**
   - You'll now see your **Client ID** and **Client Secret**

5. **Save Your Credentials**
   - Copy both the Client ID and Client Secret
   - Store them somewhere safe (Notes app, Notion, or Google Doc)
   - You'll paste them inside your Google Sheets node in n8n in the next module

**Status:** ✅ Completed

#### Part 2: Connect n8n to Google Sheets ⏳
**Estimated time:** 30 minutes

**Objective:**
Build the final intelligence pipeline that connects Supabase to Google Sheets, turning static intelligence into a living system that automatically collects, processes, and visualizes information.

**What This Does:**
- **Supabase** holds all agent outputs (raw HTML reports from each project)
- **n8n** acts as the editor - reviews each report, extracts key details, and standardizes them into clean, structured data
- **Google Sheets** becomes the front page - where insights are published, organized by category, and instantly visible to teams

**Steps:**

1. **Import the Workflow into n8n**
   - The workflow file is located at: `workflows/project5/supabase_sheets_integration.json`
   - In n8n, go to **Workflows → Import → Upload** and select this file
   - Rename it to **Project 5 — Supabase → Sheets Integration**
   - Don't execute it yet: you'll first connect credentials and IDs
   
   ![Update Sheet Workflow](screenshots/project5/update_sheet_workflow.png)
   *The n8n Project 5 workflow with Google Sheets Update nodes configured*

2. **Add Credentials and IDs**

   **a) Supabase:**
   - Go to **Credentials → Add New → Supabase**
   - Paste your **Project URL** and **Service Role Key** (found in Supabase → Project Settings → API)
   - Name it `Supabase-Extern-<YourName>`
   - Open each Supabase node in your workflow (Get a row1, Get a row2, Get a row3) and select this credential
   - Confirm that the table name is `agent_output`

   **b) Google Sheets:**
   - **Before you start:** Make sure you completed the Google Cloud Console steps (you have a Client ID + Client Secret)
   - Open the Google Sheet template (you'll duplicate it) and note the **Spreadsheet ID** (long string in the URL). Keep it handy.

   **1) Create the Google Sheets credential in n8n:**
   - In n8n: go to **Credentials → Add New → Google Sheets (OAuth2)**
   - Paste your **Client ID** and **Client Secret** from Google Cloud Console
   - Click **Save** then **Authorize** — choose the same Google account that owns the dashboard template
   - Name the credential: `GoogleSheets-Extern-<YourName>`
   - **Quick check:** If authorization fails, ensure the Google Cloud OAuth consent screen is configured and the Sheets API is enabled in your Google Project

   **2) Attach the credential to the three Update nodes:**
   - Open each node (double-click) and confirm the credential is selected:
     - `Update 1_TrendSignals sheet`
     - `Update 2_CompetitorMoves sheet`
     - `Update 3_Allinsights sheet`
   - Make sure each node shows `GoogleSheets-Extern-<YourName>` under Credentials

   **3) Verify the spreadsheet and sheet selection:**
   - For each Update node:
     - Confirm **Document ID (Spreadsheet)** matches the template ID you duplicated
     - Confirm **Sheet** is the correct tab:
       - `1_TrendSignals`
       - `2_CompetitorMoves`
       - `3_Allinsights`

   **4) Verify column mappings (do this for every Update node):**
   - Double-click each Update node and scan the **Values to Send / Mapping** area
   - For every row:
     - The left column must match the spreadsheet column header exactly (Trend, Category, Detected Date, Size, …)
     - The value expression on the right must be `{{ $json.<field> }}` where `<field>` corresponds to the output from the preceding Code node
     - Example: `Trend → {{ $json.trend }}`, `Size → {{ $json.size }}`, `Key Insight → {{ $json.keyInsight }}`, `Input → {{ $json.input }}`
     - If any field shows a different variable name, fix it to the expected field in the JSON produced by the upstream extract node

   **c) Spreadsheet ID:**
   - Copy the **Wayfair Dashboard Template ID** from the URL from your duplicated template sheet (the long string between `/d/` and `/edit`)
   - Paste this value into the `documentId` field inside each of the three Google Sheets nodes
   - Confirm that each node points to the correct tab:
     - Tab 1 → `1_TrendSignals`
     - Tab 2 → `2_CompetitorMoves`
     - Tab 3 → `3_Allinsights`

3. **Confirm Sheet Tabs and Columns**

   Each tab in your duplicated Google Sheet must have the exact column headers listed below. If you renamed or deleted a column, restore it before running the workflow.

   **Tab: 1_TrendSignals**
   - Columns: `Trend | Category | Detected Date | Size | Color | Material | Pattern | Style | Feature | Price Bucket | Mentions (Sources) | Key Insight | Source Example | Input`

   **Tab: 2_CompetitorMoves**
   - Columns: `Category | Feature | Competitor | Product / Collection | Price | Rating | PDP Highlights | Campaign / Social Mention | Last Launch Date | Insight | Wayfair Gap | Suggested Action | Input`

   **Tab: 3_Allinsights**
   - Columns: `Insight | Related Trend | Related Competitor | Attribute | Summary Insight | Recommended Action | Content Idea | Type (Blog / Social / Campaign) | Impact Level | Owner / Team | Date Created | Input`

   **Note:** The fourth tab, `4_ExecutiveSummary`, is intentionally left out because it already contains built-in formulas that automatically pull data from the first three. It's your live dashboard, not a data input sheet. Every time your workflow runs and new rows are added to the first three tabs, the Executive Summary updates instantly.

4. **Inspect and Update the Workflow**

   Inside n8n, open the following nodes and confirm details:
   - **Get a row1** → pulls data where `agentId = 2` (Trend Discovery)
   - **Get a row2** → pulls data where `agentId = 3` (Competitor Monitoring)
   - **Get a row3** → pulls data where `agentId = 4` (Content Insights)
   - Each of the three **Gemini Chat Model** nodes reads HTML from Supabase and converts it to JSON
   - The **Generate output for Excel sheet** nodes give Gemini exact schemas to follow so the output structure matches your dashboard
   - The **Extract data from AI output** nodes (1, 2, and 3) clean and flatten JSON into individual spreadsheet fields
   - The **Update sheet** nodes append that data into Google Sheets

   Save the workflow once all credentials and IDs are linked correctly.

5. **Run the Workflow**

   - Click **Execute Workflow** (manual trigger)
   - Watch the flow:
     - Supabase nodes fetch the latest HTML reports
     - Gemini nodes convert them into structured JSON
     - Extract nodes parse and clean data
     - Sheets nodes push rows into your dashboard tabs
   - Open your duplicated Google Sheet and confirm that all three tabs are updated with new data
   
   ![Google Sheets After Execution](screenshots/project5/google_sheets_after_execution.png)
   *The Google Sheets dashboard with data successfully populated from the workflow execution*

**Status:** ✅ Completed - Workflow tested and data successfully flowing to Google Sheets

**Dashboard Link:**
- Google Sheets Dashboard: https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit?gid=0#gid=0

**Loom Recording:**
- URL: (to be added)

**Testing Guide:**
See detailed testing instructions in the "Test the Pipeline" section below.

**Progress Notes:**
- ✅ Workflow imported: `workflows/project5/supabase_sheets_integration.json`
- ✅ Google Cloud Console OAuth credentials created:
  - Client ID: `[REDACTED - stored securely]`
  - Client Secret: `[REDACTED - stored securely]`
  - Redirect URI configured for local n8n: `http://localhost:5678/rest/oauth2-credential/callback`
- ✅ OAuth consent screen configured with test user: `rayyanoumlil@gmail.com`
- ✅ Google Sheets credential created in n8n
- ⚠️ Encountered "Forbidden" error when testing workflow - needs verification:
  - Spreadsheet ID in workflow: `1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo`
  - Need to verify Google Sheet exists and is accessible with the OAuth account
  - Need to verify credentials are properly attached to all 3 Update nodes

**Issues Resolved:**
- Fixed OAuth "invalid_client" error by creating new OAuth Client ID with correct redirect URI for local n8n
- Fixed OAuth "access_denied" error by adding test user to OAuth consent screen

**Next Steps:**
- ✅ Verify Google Sheet access and Spreadsheet ID
- ✅ Test workflow execution end-to-end
- ✅ Verify data appears in all 3 tabs (1_TrendSignals, 2_CompetitorMoves, 3_Allinsights)

**Screenshots:**
- Update Sheet Workflow: `screenshots/project5/update_sheet_workflow.png` - Shows the n8n workflow with Update sheet nodes configured
- Google Sheets After Execution: `screenshots/project5/google_sheets_after_execution.png` - Shows the Google Sheets dashboard with data populated from the workflow

#### Part 3: Create Dashboard Views ✅
**Estimated time:** Already included in template

**Objective:**
The Google Sheets template already includes a built-in dashboard view that automatically visualizes insights from all three agents.

**Dashboard Structure:**
- **Tab 1: 1_TrendSignals** - Receives data from Project 2 (Trend Discovery Agent)
- **Tab 2: 2_CompetitorMoves** - Receives data from Project 3 (Competitor Monitoring Agent)
- **Tab 3: 3_Allinsights** - Receives data from Project 4 (Content Insights Agent)
- **Tab 4: 4_ExecutiveSummary** - **Live dashboard** with built-in formulas that automatically pull data from the first three tabs

**How It Works:**
- The `4_ExecutiveSummary` tab contains formulas that automatically aggregate and visualize data from tabs 1-3
- Every time your workflow runs and new rows are added to the first three tabs, the Executive Summary updates instantly
- No manual formatting needed - the dashboard is alive and updates in real-time

**Status:** ✅ Already configured in template

### Step 3: Test the Pipeline and Capture Your Dashboard ⏳
**Estimated time:** 1 hour

**Objective:**
Run all three workflows end-to-end, verify Google Sheet updates accurately, and visually confirm that your data pipeline is stable. This is your "system integration test" - proof that your entire AI–data–dashboard ecosystem works as one.

**Steps:**

1. **Run the Full Workflow Sequence**
   - Open n8n and load your Project 2, 3, and 4 workflows
   - Ensure Project 2 outputs HTML, not PDF
   - For each workflow, use real Amazon URLs and clear prompts
   - Run each project **twice** to generate enough data for testing
   - Open your Google Sheets dashboard and confirm new rows appear in each tab

2. **Inputs to Use**

   **Project 2: Trend Discovery Agent**
   - Inputs: Product URL + Collection URL (Amazon)
   - Ask: "Find key product trends and attributes like size, color, material, and pattern."
   
   **Project 3: Competitor Monitoring Agent**
   - Inputs: Amazon Product URL + Collection URL
   - Ask: "Extract competitor highlights — price, rating, PDP messaging, and whitespace opportunities."
   
   **Project 4: Content Insights Agent**
   - Inputs: Same URLs as P2/P3
   - Ask: "Generate two creative ideas (one blog, one social caption) based on identified trends."

   **Sample input format:**
   ```
   Amazon product url: <full product URL>
   Amazon collection url: <full search/collection URL>
   Task: <one-line instruction as above>
   ```

3. **What to Check**
   - ✅ New rows appear under all three sheets (1_TrendSignals, 2_CompetitorMoves, 3_Allinsights)
   - ✅ Columns are cleanly filled — no HTML tags, markdown fences, or blank cells
   - ✅ Input column correctly shows the URLs you entered
   - ✅ Dates, prices, and insights appear in the right columns
   - ✅ Formulas in Sheet 4 (Executive Summary) refresh automatically
   - ✅ Data patterns make logical sense (e.g., the same trend surfaces across projects)

4. **Record Loom Video**
   - Record a 4-5 minute Loom showing the dashboard live
   - Walk through each of the 4 sheets
   - Explain what's happening on-screen
   - Show how data flows from agents → Supabase → n8n → Google Sheets

5. **What to Focus on in the Dashboard**
   - **Sheet 1 (TrendSignals):** Are trend signals consistent with what's trending online?
   - **Sheet 2 (CompetitorMoves):** Do competitor actions align with or contradict those trends?
   - **Sheet 3 (Allinsights):** Do your content ideas logically build on both?
   - **Sheet 4 (ExecutiveSummary):** Does it tell a coherent "story of movement" and where Wayfair should focus next?

**Deliverables:**
- Loom recording URL (4-5 minutes) showing live dashboard walkthrough
- Evidence of execution: Each of the first three tabs shows at least two successful data runs
- Clean, reliable data: All columns parsed and readable
- Traceability: Input column links clearly to task URLs, insights connect logically across projects

**Status:** ⏳ In Progress

**Deliverables:**
- ✅ Google Sheets Dashboard: https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit?gid=0#gid=0
- ⏳ Loom Recording URL: (to be added)

**Reflection on Information → Intelligence:**
- See `docs/project5/REFLECTION.md` for detailed insights

### Step 4: Final Presentation ⏳
**Estimated time:** 20 minutes (preparation) + presentation time

**Objective:**
Create a professional presentation deck that transforms your technical work into a clear, strategic story for Wayfair's team. Showcase how your agents work, what insights they generate, and how Wayfair could use them.

**Presentation Structure:**

#### Slide 1: Cover Slide
- Your name, email, and cohort
- Professional headshot or simple image
- Title: "Wayfair Rugs Market Intelligence: AI Agent Demo"

**Opening Script:**
"Hi Maria, I'm [your name], and this is my final presentation. I'll be walking you through my AI agent system and dashboard that helps Wayfair's Rugs category team track trends, competitors, and generate content ideas."

#### Slide 2: Executive Summary
Your "elevator pitch" for the entire project.

**What goes here:**
- **Objective**: What business goal does your externship serve
- **Solution**: Number of agents built and their collective function
- **Core Outputs**: Key agents (with links to sample outputs)
  - Trend Discovery Agent – link or screenshot of output
  - Competitor Monitoring Agent – link or screenshot of output
  - AI Insights & Content Agent – link or output sample
  - Integrated Dashboard – screenshot or link
- **Key Insights**: Top findings from your agents
- **Future Improvements**: One or two thoughtful next-step ideas

#### Slide 3: Agent 1: Moodboard Generator (Optional)
This slide is provided as a sample. You may include it if you'd like, but it's not mandatory.

**What goes here:**
- 🎯 Objective: Explain why you built this agent
- 🧠 Input Prompt Example: One sample prompt
- ⚠️ Keep in Mind / Input Notes: Rules, limitations, or constraints
- 📎 Attachments:
  - View JSON Workflow (Google Drive link)
  - View Sample Moodboard (output example)
- 🖼️ Output Example: Image grid or screenshots
- 💡 Improvements: Potential enhancements

#### Slides 4-6: Your Three Main Agents
**Slide 4: Trend Discovery Agent (Project 2)**
**Slide 5: Competitor Monitoring Agent (Project 3)**
**Slide 6: AI Insights & Content Agent (Project 4)**

**For each agent slide:**
- 🎯 **Objective**: What this agent does
- 🧠 **Input Prompt Example**: Sample prompt you used
- ⚙️ **Keep in Mind / Input Notes**: What users should know, limits, or rules
- 💡 **Improvements / Expansion Opportunities**: 
  - Example (Trend Agent): "Currently scrapes Amazon only — can be expanded to include Walmart or IKEA"
  - Example (Competitor Agent): "Limited to first 10 pages — adding pagination can enhance completeness"
  - Example (AI Insights Agent): "Could connect to Wayfair's internal SKU data for deeper insights"
- 📎 **Attachments**: 
  - JSON Workflow (upload to Google Drive, add link)
  - Output Sample (PDF or screenshot, upload to Google Drive, add link)

**Important:** During presentation, open n8n and demonstrate each agent live. Show how they take input prompts and generate outputs. Briefly explain the workflow logic (no coding deep dive).

#### Slide 7: Market Intelligence Dashboard (Project 5)
Where everything comes together.

**What goes here:**
- 🎯 **Objective**: Why this dashboard matters
- ⚙️ **How It Works**: Explain how the 4 agents feed into it
- ⚠️ **Keep in Mind / Implementation Notes**: Refresh, automation, or access details
- 💡 **Improvements**: Suggestions for next versions
- 📎 **Attachments**:
  - JSON Workflow (upload to Google Drive, add link)
  - Google Sheets Dashboard Link: https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit?gid=0#gid=0
  - **Important**: Give view access to the Google Sheet

![Google Sheets Dashboard](screenshots/project5/google_sheets_after_execution.png)
*The integrated dashboard showing data from all three agents*

#### Slide 8: Reflections & Future Improvements
Your chance to show learning depth and professional maturity.

**What goes here:**
- 🧭 **Key Learnings**: What you personally learned
  - 3–4 bullet points (technical + strategic)
- 🚀 **Future Improvements / Next Steps**: Where you'd take this next

#### Slide 9: Thank You
Your closing slide.

**What goes here:**
- "Thank you" message
- Optional: Link to full workflow folder or demo video

**Deliverables:**
- Professional presentation deck (Google Slides or PowerPoint)
- All workflow JSON files uploaded to Google Drive with view access
- Sample outputs uploaded to Google Drive
- Google Sheets dashboard with view access
- Live demonstration during presentation

**Using GPT to Create Your Slides:**

Follow these step-by-step instructions to use GPT to generate professional slide content:

#### Step 1: Give GPT a Persona
Set the tone and context for GPT:

**Sample Prompt:**
```
You are an AI consultant helping me create my final presentation for the Wayfair AI Externship.

I have built several AI agents in n8n — Trend Discovery, Competitor Monitoring, AI Insights, and a Dashboard — to help Wayfair's Rugs Category team track trends and generate insights.

Your goal is to help me create clear, concise, and professional slide content following the official Wayfair Final Presentation Template.

I will share screenshots and outputs from each agent. Once you understand the context, please help me draft slide text for each one.
```

#### Step 2: Share the Template with GPT
Upload the Final Presentation Template PDF to GPT and explain the structure:

**Sample Prompt:**
```
Here's the structure of my final presentation template:

Slide 1: Cover
Slide 2: Executive Summary
Slides 3–6: Agents (Objective, Input Prompt, Input Notes, Attachments, Output Example, Improvements)
Slide 7: Dashboard
Slide 8: Reflections
Slide 9: Thank You

You'll help me create content for each slide, starting with Slide 4 (Trend Discovery Agent).

Once we're done with the agent slides, we'll move backward and finish with Slide 2 (Executive Summary).

[Upload the Template PDF]
```

#### Step 3: Add Sample Slide as Reference
Show GPT Slide 3 (Moodboard Generator) as an example:

**Sample Prompt:**
```
Before we begin, here's a sample slide from my presentation — Slide 3 (Agent 1: Moodboard Generator).

Please use this as a reference for tone, layout, and structure when drafting the other agent slides.

[Upload Slide 3]
```

#### Step 4: Add Screenshots and Outputs for Each Agent
Share your agent details one at a time:

**Example Prompt for Agent 1:**
```
I have created a total of three agents, which I'll share one by one.

Here's my first agent: Trend Discovery Agent.

Objective: [Briefly describe what this agent does and why it's valuable.]

Screenshot: [Attach your n8n workflow screenshot.]

[Upload the Output PDF here.]

For now, please review the agent and its output to understand what it does.

I'll share the next agent in my following messages.

Feel free to ask any questions if you need clarification before we start creating the slides.
```

Repeat for:
- Agent 2: Competitor Monitoring Agent
- Agent 3: AI Insights & Content Agent
- Agent 4: Dashboard Integration

#### Step 5: Ask GPT to Draft Slide Content
Once GPT has context, ask it to write:

**Sample Prompt:**
```
Now that you have the Trend Discovery Agent details and the Moodboard Generator slide as reference, please draft my Slide 4 content following the same tone and structure.

Include sections for:
- Objective
- Keep in Mind / Input Notes
- Attachments
- Output Example
- Improvements

Keep it concise and professional — just like a consultant presenting to Wayfair.
```

You can refine with:
- "Make it shorter."
- "Add an example prompt."
- "Rephrase to sound more strategic."

#### Step 6: Repeat for Each Agent
Repeat the same process for all agents, maintaining consistency in tone and format.

#### Step 7: Create the Executive Summary (Slide 2) — Last
Once all agent slides are complete:

**Sample Prompt:**
```
Now that we've finished all agent and dashboard slides, please help me write the Executive Summary (Slide 2).

Summarize the project in 4–5 bullet points, including:
- Objective of the externship
- Agents built
- Key insights discovered
- Future improvements
```

**Important Note:**
GPT can help structure and refine your slides, but your presentation should reflect your authentic experience. You'll need to personally add:
- Your reflections and learnings
- Your discoveries and key takeaways
- Your thoughts on improvements and next steps

Especially in the "Reflections" and "Future Improvements" sections, use your own insights from the project.

**Automation Option:**
- See [Presentation Automation Guide](./PRESENTATION_AUTOMATION.md) for using Google Apps Script and Gemini API to automate slide creation
- Scripts available for programmatic slide generation with JavaScript

**Status:** ⏳ Not started

## Integration Architecture

This project brings together:
- **Project 2:** Consumer Trend Discovery Agent (RSS feeds, Google Search, Amazon scraping)
- **Project 3:** Competitor Monitoring Agent (Wayfair + Amazon data scraping and analysis)
- **Project 4:** AI Insights & Content Agent (Creative content generation from trend signals)

All connected through:
- **Supabase Database:** Centralized data storage and sync
- **n8n Workflows:** Automated data pipelines
- **Google Sheets Dashboard:** Real-time visualization and intelligence

## Expected Deliverables

1. **Live Google Sheets Dashboard**
   - Visualizes user intent data
   - Shows competitor insights
   - Displays trend signals
   - Presents content generation outputs
   - Updates automatically from live pipelines

2. **Loom Presentation (5–7 minutes)**
   - System overview and architecture
   - Key insights and findings
   - Business impact and implications
   - Strategic recommendations

## Skills You'll Develop

- Database integration (Supabase)
- Multi-workflow orchestration in n8n
- Google Sheets API integration
- Data pipeline automation
- Business intelligence dashboard design
- Strategic presentation and storytelling
- Connecting technical outputs to business value

## Recent Updates & Workflow Recovery

**Date: December 4, 2025**

### Workflow Recovery
- Recovered all workflows (Projects 2, 3, 4, 5) from Dockerized n8n instance
- Workflows exported and organized:
  - `workflows/project2/market_trend_discovery_agent.json`
  - `workflows/project3/competitor_monitoring_agent.json`
  - `workflows/project4/ai_insights_content_agent.json`
  - `workflows/project5/supabase_sheets_integration.json`
  - `workflows/project2/components/amazon_scraper.json` (component workflow)

### Technical Fixes
- **Project 4 JSON Parsing Fix**: Updated JavaScript code in "Extract data from AI output" node to robustly parse JSON from AI output, handling cases where AI returns non-JSON text or markdown code blocks
- **Cheerio Dependency**: Resolved `Cannot find module 'cheerio'` error by installing cheerio in n8n Docker container
- **n8n Environment**: Reinitialized n8n Docker setup with fresh instance

### OAuth Configuration
- Created new Google Cloud Console project: "n8nextern"
- Configured OAuth 2.0 Client ID for local n8n instance
- Set up OAuth consent screen with test user
- Configured Google Sheets credential in n8n

## Documentation & Resources

- Workflow files: `workflows/project5/supabase_sheets_integration.json`
- Screenshots: `screenshots/project5/`
  - ![Supabase Table Editor](screenshots/project5/supabase_table_editor.png) - Supabase table with agent outputs
  - ![Supabase Integration Nodes](screenshots/project5/supabase_integration_nodes.png) - n8n workflow with Supabase nodes
  - ![Update Sheet Workflow](screenshots/project5/update_sheet_workflow.png) - Google Sheets update workflow
  - ![Google Sheets After Execution](screenshots/project5/google_sheets_after_execution.png) - Dashboard with populated data
- Dashboard: https://docs.google.com/spreadsheets/d/1oSmzk_YLSVHZZ1UQmBH9Z7b0fNJv9Wcesk4UbQ0IIZo/edit?gid=0#gid=0
- **Final Presentation PDF:** `docs/project5/final_presentation.pdf` ✅
- Presentation Content: `docs/project5/PRESENTATION_CONTENT.md` - Complete slide content
- Gemini Canvas Guide: `docs/project5/GEMINI_CANVAS_GUIDE.md` - Step-by-step creation guide

---

**Status:** ✅ Completed

**Final Deliverables:**
- ✅ Complete Market Intelligence Dashboard system operational
- ✅ All workflows connected and tested
- ✅ Final presentation PDF created: `docs/project5/final_presentation.pdf`
- ✅ All documentation complete

**Last Updated:** December 4, 2025

