# Guide de Configuration - Project 5 Workflow

## Checklist de Configuration

### ✅ Étape 1 : Credentials Supabase

1. **Créer la credential Supabase dans n8n** :
   - Allez dans **Credentials** (icône clé en bas à gauche)
   - Cliquez sur **Add New → Supabase**
   - **Host** : Collez votre Project URL (ex: `https://xxxxxxxxxxxxx.supabase.co`)
   - **Service Role Secret** : Collez votre Service Role Key
   - **Name** : `Supabase-Extern-<VotreNom>`
   - Cliquez sur **Save**

2. **Attacher la credential aux 3 nodes Supabase** :
   - Double-cliquez sur **Get a row1** → Sélectionnez votre credential Supabase
   - Double-cliquez sur **Get a row2** → Sélectionnez votre credential Supabase
   - Double-cliquez sur **Get a row3** → Sélectionnez votre credential Supabase

3. **Vérifier les configurations** :
   - **Get a row1** : `agentId = 2` (Trend Discovery)
   - **Get a row2** : `agentId = 3` (Competitor Monitoring)
   - **Get a row3** : `agentId = 4` (Content Insights)
   - Table : `agent_output` (pour tous)

---

### ✅ Étape 2 : Credentials Google Sheets

1. **Créer la credential Google Sheets dans n8n** :
   - Allez dans **Credentials → Add New → Google Sheets (OAuth2)**
   - **Client ID** : `202908537047-4gbccbkag10tbjnbpuipk68s46rharcp.apps.googleusercontent.com`
   - **Client Secret** : `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C`
   - Cliquez sur **Save**
   - Cliquez sur **Authorize** → Choisissez votre compte Google
   - **Name** : `GoogleSheets-Extern-<VotreNom>`

2. **Attacher la credential aux 3 nodes Google Sheets** :
   - Double-cliquez sur **Update 1_TrendSignals sheet**
     - Sélectionnez votre credential Google Sheets
     - Vérifiez le **Document ID** (Spreadsheet ID)
     - Vérifiez que **Sheet** = `1_TrendSignals`
   
   - Double-cliquez sur **Update 2_CompetitorMoves sheet**
     - Sélectionnez votre credential Google Sheets
     - Vérifiez le **Document ID**
     - Vérifiez que **Sheet** = `2_CompetitorMoves`
   
   - Double-cliquez sur **Update 3_Allinsights sheet**
     - Sélectionnez votre credential Google Sheets
     - Vérifiez le **Document ID**
     - Vérifiez que **Sheet** = `3_Allinsights`

---

### ✅ Étape 3 : Spreadsheet ID

1. **Trouver votre Spreadsheet ID** :
   - Ouvrez votre Google Sheet dupliqué
   - Regardez l'URL : `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`
   - Copiez le **Spreadsheet ID** (la longue chaîne entre `/d/` et `/edit`)

2. **Coller dans les 3 nodes Google Sheets** :
   - Dans chaque node "Update ... sheet"
   - Collez le **Spreadsheet ID** dans le champ **Document ID**

---

### ✅ Étape 4 : Vérifier les Mappings de Colonnes

Pour chaque node "Update ... sheet", vérifiez les mappings :

#### Update 1_TrendSignals sheet
Les colonnes doivent mapper vers :
- `Trend` → `{{ $json.trend }}`
- `Category` → `{{ $json.category }}`
- `Detected Date` → `{{ $json.detectedDate }}`
- `Size` → `{{ $json.size }}`
- `Color` → `{{ $json.color }}`
- `Material` → `{{ $json.material }}`
- `Pattern` → `{{ $json.pattern }}`
- `Style` → `{{ $json.style }}`
- `Feature` → `{{ $json.feature }}`
- `Price Bucket` → `{{ $json.priceBucket }}`
- `Mentions (Sources)` → `{{ $json.mentionsSources }}`
- `Key Insight` → `{{ $json.keyInsight }}`
- `Source Example` → `{{ $json.sourceExample }}`
- `Input` → `{{ $json.input }}`

#### Update 2_CompetitorMoves sheet
- `Category` → `{{ $json.category }}`
- `Feature` → `{{ $json.feature }}`
- `Competitor` → `{{ $json.competitor }}`
- `Product / Collection` → `{{ $json.productCollection }}`
- `Price` → `{{ $json.price }}`
- `Rating` → `{{ $json.rating }}`
- `PDP Highlights` → `{{ $json.pdpHighlights }}`
- `Campaign / Social Mention` → `{{ $json.campaignSocialMention }}`
- `Last Launch Date` → `{{ $json.lastLaunchDate }}`
- `Insight` → `{{ $json.insight }}`
- `Wayfair Gap` → `{{ $json.wayfairGap }}`
- `Suggested Action` → `{{ $json.suggestedAction }}`
- `Input` → `{{ $json.input }}`

#### Update 3_Allinsights sheet
- `Insight` → `{{ $json.insight }}`
- `Related Trend` → `{{ $json.relatedTrend }}`
- `Related Competitor` → `{{ $json.relatedCompetitor }}`
- `Attribute` → `{{ $json.attribute }}`
- `Summary Insight` → `{{ $json.summaryInsight }}`
- `Recommended Action` → `{{ $json.recommendedAction }}`
- `Content Idea` → `{{ $json.contentIdea }}`
- `Type (Blog / Social / Campaign)` → `{{ $json.type }}`
- `Impact Level` → `{{ $json.impactLevel }}`
- `Owner / Team` → `{{ $json.ownerTeam }}`
- `Date Created` → `{{ $json.dateCreated }}`
- `Input` → `{{ $json.input }}`

---

### ✅ Étape 5 : Vérifier Google Gemini

Vérifiez que les 3 nodes **Google Gemini Chat Model** ont leurs credentials configurés :
- Google Gemini Chat Model1
- Google Gemini Chat Model2
- Google Gemini Chat Model3

---

## Résolution des Triangles d'Avertissement

Les triangles d'avertissement apparaissent quand :
- ❌ Credentials manquants → Ajoutez les credentials
- ❌ Configuration incomplète → Vérifiez tous les champs
- ❌ Spreadsheet ID manquant → Ajoutez le Document ID

**Pour résoudre** :
1. Double-cliquez sur le node avec le triangle
2. Vérifiez tous les champs requis
3. Sauvegardez le node
4. Le triangle devrait disparaître

---

## Test du Workflow

1. **Vérifiez que Supabase a des données** :
   - Allez dans Supabase → Table Editor → `agent_output`
   - Vérifiez qu'il y a des lignes avec `agentId = 2, 3, 4`

2. **Exécutez le workflow** :
   - Cliquez sur **Execute Workflow**
   - Surveillez l'exécution dans les logs

3. **Vérifiez Google Sheets** :
   - Ouvrez votre Google Sheet
   - Vérifiez que les 3 onglets ont de nouvelles lignes

---

## Dépannage

### Erreur "Cannot find module 'cheerio'"
```powershell
docker exec n8n-app npm install cheerio
docker restart n8n-app
```

### Erreur "Invalid credentials"
- Vérifiez que les credentials sont bien sélectionnés dans chaque node
- Vérifiez que les clés sont correctes (pas d'espaces)

### Erreur "Spreadsheet not found"
- Vérifiez le Document ID dans chaque node
- Vérifiez que vous avez accès au Google Sheet avec le compte autorisé

### Pas de données dans Google Sheets
- Vérifiez que Supabase contient des données
- Vérifiez les logs d'exécution pour voir où ça bloque
- Vérifiez les mappings de colonnes

