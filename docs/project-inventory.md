# InterLex Project Inventory

Date: `2026-04-21`
Source set: local `docs/spec/*` plus current app routes in `interlex/src/app`

## How to read statuses

- `Docs priority` = статус из проектной документации:
  - `P0 / Phase 1 core` = обязательный коммерческий блок запуска
  - `P1 / Phase 1 extended` = входит в этап 1, но не в самом первом ядре
  - `P2 / Phase 2 planned` = явно отнесён в документации на второй этап или в отложенные разделы
  - `Not explicit` = в документации направление есть, но приоритет прямо не проставлен
- `Site status` = фактическое состояние в текущем коде:
  - `Implemented`
  - `Partial`
  - `Not implemented`

## Core Project Tracks

| Project / Track | Jurisdiction | Description | Docs priority | Site status | Main sources |
|---|---|---|---|---|---|
| Business registration in Kazakhstan | Kazakhstan | Foreign-entry track for launching a legal entity, branch, BIN, bank account, and core setup | `P0 / Phase 1 core` | `Partial` | `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| SEZ selection and setup | Kazakhstan | Choosing and structuring work through Kazakhstan SEZs with filters, incentives, and zone cards | `P1 / Phase 1 extended` | `Partial` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| AIFC / Astana Hub entry | Kazakhstan | Special-regime path for finance, tech, and structured market entry | `Not explicit` | `Partial` | `01_structured_tz.md`, `02_sitemap_and_page_blocks.md` |
| Business registration in Georgia | Georgia | Fast company launch track with LLC / IE setup and banking entry | `P0 / Phase 1 core` | `Partial` | `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| FIZ / Free Industrial Zone setup | Georgia | Entry through Georgian FIZs, including zone comparison and operating fit | `P1 / Phase 1 extended` | `Partial` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| Virtual Zone / International Company | Georgia | Tax-regime track for IT, export, and international operating structures | `P1 / Phase 1 extended` | `Partial` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| Investor entry and GR support | Cross-border / investors | Entry through preferences, GR, state engagement, residency, and incentive programs | `P1 / Phase 1 extended` | `Implemented` | `01_structured_tz.md`, `02_sitemap_and_page_blocks.md`, `04_content_plan_by_pages.md` |
| Kazakhstan investment projects | Kazakhstan | Investor-entry projects around incentives, GR, residency, SEZs, and institutional support | `Not explicit` | `Implemented` | `01_structured_tz.md`, `04_content_plan_by_pages.md`, current `/kz` and `/projects` |
| Georgia investment projects | Georgia | Investor-entry projects around FIZ, special regimes, residency, and cross-border setup | `Not explicit` | `Implemented` | `01_structured_tz.md`, `04_content_plan_by_pages.md`, current `/ge` and `/projects` |
| M&A / asset acquisition | Kazakhstan / Georgia / CIS | Buy-side or sell-side work around assets, plants, logistics, real estate, and structured transactions | `P1 / Phase 1 extended` | `Partial` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| Due Diligence | Kazakhstan / Georgia / cross-border | Financial, legal, tax, operational, and compliance review before a transaction | `P1 / Phase 1 extended` | `Partial` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md`, `04_content_plan_by_pages.md` |
| Cross-border holding / governance setup | Kazakhstan + Georgia | Holding architecture, governance, recurring compliance, and ownership structuring across both jurisdictions | `Not explicit` | `Implemented` | `01_structured_tz.md`, current `/projects` |
| Accounting and legal support retainer | Kazakhstan / Georgia | Ongoing accounting, legal support, and post-registration maintenance | `Not explicit` | `Partial` | `01_structured_tz.md`, `04_content_plan_by_pages.md` |
| Corporate management | Kazakhstan / Georgia | Nominee / trusted management / management-company style support for foreign-owned structures | `Not explicit` | `Partial` | `01_structured_tz.md`, `04_content_plan_by_pages.md` |
| Turnkey operating company | Kazakhstan / Georgia | Expanded setup beyond incorporation into HR, logistics, IT, procurement, and operational launch | `Not explicit` | `Partial` | `01_structured_tz.md`, `04_content_plan_by_pages.md` |

## Package-Style Project Offers

| Package | Description | Docs priority | Site status | Main sources |
|---|---|---|---|---|
| `KZ Starter` | Entry package for launching in Kazakhstan | `P0 / Phase 1 core` | `Implemented` | `02_sitemap_and_page_blocks.md`, current `/packages` |
| `KZ Free Zone` | Kazakhstan free-zone entry package | `P0 / Phase 1 core` | `Implemented` | `02_sitemap_and_page_blocks.md`, current `/packages` |
| `GE Virtual Zone` | Georgia tax-regime entry package for digital/export setups | `P0 / Phase 1 core` | `Implemented` | `02_sitemap_and_page_blocks.md`, current `/packages` |
| `KZ + GE Holding` | Cross-border holding package across both jurisdictions | `P0 / Phase 1 core` | `Implemented` | `02_sitemap_and_page_blocks.md`, current `/packages` |

## Cases And Proof Layer

| Item | Description | Docs priority | Site status | Main sources |
|---|---|---|---|---|
| Homepage case cards | 3-4 anonymised case cards with sectors, countries, and outcomes | `Not explicit` | `Implemented` | `02_sitemap_and_page_blocks.md`, `04_content_plan_by_pages.md`, current `/` |
| Dedicated cases section | Separate `/about/cases` and `/ma/cases` pages with anonymised examples | `P2 / Phase 2 planned` | `Not implemented` | `02_sitemap_and_page_blocks.md`, `03_launch_scope.md` |
| Rich visual case studies | Full visual case studies and deeper proof materials | `P2 / Phase 2 planned` | `Not implemented` | `03_launch_scope.md`, `06_stitch_prompt.md` |

## Explicit Status-Like Items In The Documentation

These are not client-project statuses, but they are the only explicit status markers found in the documentation set.

| Item | Status model in docs | Notes | Main sources |
|---|---|---|---|
| Kazakhstan SEZ cards | attributes + term + incentives | zone records should store region, sectors, incentives, duration | `02_sitemap_and_page_blocks.md`, `05_dev_task_list.md` |
| Georgia FIZ / SIZ cards | `active`, optional `upcoming/planned` | docs explicitly mention `upcoming/planned` for Georgian zones when needed | `01_structured_tz.md`, `04_content_plan_by_pages.md`, `05_dev_task_list.md` |
| Launch scope | `P0`, `P1`, `P2` | this is the cleanest status model for the project register itself | `03_launch_scope.md` |

## Current Gaps

- The documentation describes many project tracks, but does not contain a single canonical project register.
- For most tracks there is no operational lifecycle status like `lead`, `in progress`, `won`, `closed`; only launch priority and planned scope are documented.
- `Cases` are explicitly planned, but rich standalone case-study pages are still a phase-2 item in the documentation.
- SEZ/FIZ datasets are intended to have status-like attributes, but the documentation does not provide a completed master dataset in the repo.

## Recommended Next Step

If this register should become working operational inventory instead of a documentation summary, the next logical step is to add a structured source file with fields like:

- `id`
- `title`
- `country`
- `type`
- `description`
- `docsPriority`
- `siteStatus`
- `businessStatus`
- `sourceRefs`

That would let us use one source both for internal tracking and for rendering a public `/projects` catalogue.
