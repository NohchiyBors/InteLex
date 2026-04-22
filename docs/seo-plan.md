# SEO Plan: InterLex

Date: `2026-04-22`
Project: `InterLex`

## Goal
- Strengthen the organic search foundation for `interlex.kz` and `interlex.ge`
- Preserve the service-catalog architecture and jurisdiction split
- Build an SEO layer that supports services, jurisdiction pages, and future content expansion

## Current Baseline
- Base `generateMetadata` already exists in the root layout
- Production and staging are already separated for indexing rules through `robots`
- Key pages already have `generateMetadata`
- Service catalog, jurisdiction pages, and projects page are already present
- Google Analytics is already wired for the two production hosts

## Gaps Identified
- No explicit `sitemap` implementation is present
- No clear `canonical` strategy is visible for both production domains
- No `hreflang` / `alternates.languages` layer is visible for domain-locale relationships
- Service metadata is still fairly shallow and does not fully reflect search intent
- No structured data layer is visible for organization, services, breadcrumbs, or FAQ
- Internal linking can be made more systematic between services, jurisdictions, projects, and contacts

## Priority 1: Technical SEO Foundation

### 1. Sitemap
- Add `interlex/src/app/sitemap.ts`
- Generate production URLs for:
- `/`
- `/services`
- `/services/[slug]`
- `/packages`
- `/projects`
- `/contacts`
- `/kz`
- `/ge`
- Ensure URLs reflect the active production domain strategy

### 2. Canonical URLs
- Add canonical URLs to every indexable route
- Prevent duplicate indexing across `interlex.kz` and `interlex.ge`
- Make canonical generation host-aware or locale-aware as required by the current architecture
- Review `NEXT_PUBLIC_SITE_URL` usage so it does not collapse both domains into one canonical base

### 3. Hreflang / Alternate Language Signals
- Add `alternates.languages` in page metadata where appropriate
- Reflect the current business rules:
- `interlex.kz` primary locale: `ru`
- `interlex.ge` primary locale: `en`
- `kk -> ru`
- `ka -> en`
- Keep fallback-only locales from producing low-value duplicate pages unless intentionally expanded later

### 4. Robots And Index Control
- Keep staging as `noindex, nofollow`
- Verify production hosts expose indexable robots rules
- Explicitly confirm that non-production hosts do not leak indexable URLs

## Priority 2: Metadata System Upgrade

### 1. Shared Metadata Rules
- Introduce a shared metadata helper for title, description, canonical, and alternates
- Use consistent title patterns such as:
- `{Service Title} in Kazakhstan | InterLex`
- `{Service Title} in Georgia | InterLex`
- `Cross-Border Legal And Business Advisory | InterLex`

### 2. Service Pages
- Expand metadata for each `services/[slug]` page
- Map each page to a clear commercial query intent
- Make descriptions more specific than the current short summary-only format

### 3. Jurisdiction Pages
- Treat `/kz` and `/ge` as strong search-entry pages
- Align their titles and descriptions with country-intent queries
- Keep them distinct from generic service pages

## Priority 3: Structured Data

### 1. Organization Layer
- Add `Organization` schema
- Include brand, domains, and contact surface

### 2. Website Layer
- Add `WebSite` schema for brand-level discovery

### 3. Service Schema
- Add `Service` schema to service detail pages
- Tie service name, summary, and jurisdiction relevance together

### 4. Breadcrumb Schema
- Add `BreadcrumbList` for services, jurisdiction pages, and contacts

### 5. FAQ Schema
- Add `FAQPage` when FAQ sections are introduced on service pages

## Priority 4: Information Architecture And Internal Linking

### 1. Service Hub Logic
- Keep `/services` as the main commercial hub
- Use it to route users and crawlers into service detail pages

### 2. Jurisdiction Support
- Link service pages to relevant jurisdiction pages where helpful
- Link jurisdiction pages back into the most relevant services

### 3. Trust And Conversion Support
- Strengthen links between:
- `/services/[slug]`
- `/kz`
- `/ge`
- `/projects`
- `/contacts`

### 4. Related Services
- Add related-service blocks to reduce orphaning and deepen crawl paths

## Priority 5: Content SEO

### 1. Keyword Cluster Mapping
- Group search demand into clusters:
- company registration
- free zones and special regimes
- banking support
- accounting and legal support
- investor and GR support
- M&A and due diligence

### 2. Page-Type Roles
- Homepage: brand and broad advisory positioning
- Service pages: transaction and commercial intent
- Jurisdiction pages: country-intent entry points
- Projects page: proof and trust support
- Contacts page: conversion support

### 3. Content Expansion Targets
- Consider dedicated pages for high-value geo-intent combinations such as:
- company registration in Kazakhstan
- company formation in Georgia
- AIFC legal support
- free economic zones in Kazakhstan
- investor support in Kazakhstan
- investor support in Georgia
- due diligence in Kazakhstan
- due diligence in Georgia

### 4. FAQ Blocks
- Add FAQ sections to service pages after semantic mapping
- Use them both for user clarity and rich-result eligibility

## Priority 6: Performance And Crawl Quality
- Review Core Web Vitals on key pages
- Check LCP impact from hero images and large above-the-fold sections
- Ensure images have meaningful `alt` where they carry semantic value
- Confirm no broken internal links, redirect chains, or duplicated URLs

## Measurement
- Connect and verify Google Search Console for both `interlex.kz` and `interlex.ge`
- Track impressions, clicks, indexed pages, and canonical coverage
- Monitor whether service and jurisdiction pages begin capturing query-specific traffic

## Recommended Execution Order
1. Add `sitemap`
2. Add canonical and `hreflang` / alternates
3. Refactor shared metadata helpers
4. Add structured data
5. Improve internal linking
6. Expand service-page copy and FAQ blocks
7. Add new geo-intent landing pages where justified by semantic mapping

## Suggested Deliverables
- `interlex/src/app/sitemap.ts`
- shared SEO helpers in `interlex/src/lib/seo/*` or equivalent
- upgraded per-page metadata
- JSON-LD schema blocks on key pages
- documented keyword-to-page map for future content work
