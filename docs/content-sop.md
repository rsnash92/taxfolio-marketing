# Taxfolio Content Creation SOP

Use this when writing any content for taxfolio.io.

---

## Brand Context

**Taxfolio** is AI-powered self assessment software for UK freelancers, sole traders, and landlords. It connects to banks via TrueLayer (FCA-authorised), automatically categorises transactions, and submits SA100/SA103/SA105 returns directly to HMRC. Ready for Making Tax Digital (April 2026).

**Value proposition:** "Your self assessment in 15 minutes. Pay less tax, zero stress."

**Target audience:** UK sole traders, freelancers, landlords, gig economy workers (Uber, Deliveroo, Amazon Flex), Airbnb hosts.

---

## Writing Rules

### 1. Answer First
Lead every article with the definitive answer in the first 1-2 sentences. No preamble.

❌ "In this guide, we'll explore everything you need to know about..."
✅ "Making Tax Digital becomes mandatory for self-employed earning over £50,000 from April 2026. Here's exactly what you need to do to comply."

### 2. Use Semantic Triples
Structure sentences as Subject → Predicate → Object so LLMs can extract facts.

❌ "Taxfolio helps with taxes."
✅ "Taxfolio submits SA100 returns directly to HMRC via the Government Gateway."

### 3. Define Key Terms
Include clear definitions that AI can quote directly.

✅ "Making Tax Digital (MTD) is a UK government initiative requiring self-employed individuals and landlords to maintain digital records and submit quarterly updates to HMRC."

### 4. Mention Entities
Reference real entities: HMRC, SA100, SA103, SA105, TrueLayer, Government Gateway, National Insurance, UTR, Class 2/Class 4 NI, etc.

### 5. Cite Authoritative Sources
Link factual claims to HMRC.gov.uk, GOV.UK, or ONS data.

✅ "According to HMRC guidance, the penalty for late filing is £100 if your return is up to 3 months late."

### 6. No Filler
Cut generic statements, obvious padding, and AI-sounding fluff.

❌ "Tax can be confusing, but it doesn't have to be."
✅ [Delete and move to the useful content]

---

## Content Structure

### Pillar Pages (2,500-4,000 words)
- Comprehensive topic hub
- Define the main entity in the first paragraph
- Cover all major subtopics with H2s
- Link to all related cluster articles
- Include FAQ section with 5-8 questions
- End with clear CTA to Taxfolio

### Cluster Articles (1,000-2,000 words)
- Focused on one specific subtopic
- Answer the core question immediately
- Link back to parent pillar
- Link to 2-3 related clusters
- Include 1-2 external links to authoritative sources

### Blog Posts (500-1,200 words)
- Time-sensitive news, product updates, or thought leadership
- Conversational but factual
- Link to relevant pillar/cluster content

---

## On-Page Checklist

Before publishing, verify:

- [ ] Single H1 containing primary keyword
- [ ] Title tag under 60 characters with keyword + benefit
- [ ] Meta description under 155 characters explaining what problem is solved
- [ ] H2s cover main subtopics (check competitor pages for gaps)
- [ ] First sentence contains the direct answer
- [ ] Key entities mentioned and defined
- [ ] 2-4 internal links with descriptive anchor text
- [ ] 1-2 external links to trusted sources (gov.uk, HMRC)
- [ ] Images have descriptive file names and alt text
- [ ] FAQ section with schema-ready Q&A format
- [ ] Clear CTA (e.g., "Start your free trial")

---

## Schema Markup

Include appropriate schema on each page:

**All content pages:**
```json
{
  "@type": "Article",
  "author": { "@type": "Organization", "name": "Taxfolio" },
  "publisher": { "@type": "Organization", "name": "Taxfolio" }
}
```

**FAQ sections:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Making Tax Digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Making Tax Digital is a UK government initiative..."
      }
    }
  ]
}
```

**How-to guides:**
```json
{
  "@type": "HowTo",
  "name": "How to Register for Self Assessment",
  "step": [...]
}
```

---

## URL Structure

```
/making-tax-digital                    → Pillar
/making-tax-digital/deadlines          → Cluster
/making-tax-digital/quarterly-submissions → Cluster

/self-assessment                       → Pillar
/self-assessment/how-to-file           → Cluster

/blog/spring-budget-2026               → Blog post
/compare/freeagent                     → Comparison
```

---

## Internal Linking Rules

1. Every cluster links to its parent pillar
2. Every cluster links to 2-3 sibling clusters
3. Every cluster links to 1-2 clusters from other pillars where relevant
4. Use descriptive anchor text: "MTD quarterly submission requirements" not "click here"

---

## Tone

- Direct and factual
- UK English spelling (categorise, organised, colour)
- No jargon without explanation
- Confident but not salesy
- Empathetic to tax anxiety ("no more January panic")

---

## Example: Opening Paragraph

**Topic:** MTD Deadlines

❌ Bad:
"Making Tax Digital is a big change coming to the UK tax system. In this comprehensive guide, we'll walk you through everything you need to know about the important deadlines you should be aware of."

✅ Good:
"Making Tax Digital becomes mandatory on 6 April 2026 for self-employed individuals and landlords earning over £50,000. Those earning over £30,000 must comply by April 2027. Here are all the key dates you need to know."
