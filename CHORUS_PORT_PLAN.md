# CHORUS Port Plan

## Scope
Audit source: `/Users/ehauga/Desktop/local dev/orchestra.beamthinktank.space`

This report maps what can be reused vs what is orchestra-specific, then identifies what chorus still needs before feature implementation.

## 1. Routes / Pages Audit

### Public + participant surfaces (core product candidates)
- `/home` (hero + role-based audience pathing)
- `/viewer`, `/viewer/module/[area]`, `/viewer/role-overview/[id]`, `/viewer/book`
- `/studio`, `/studio/recordings`, `/studio/chamber`, `/studio/interviews`, `/studio/viewer-submissions`
- `/projects`, `/projects/[id]`, `/projects/[id]/media`, `/projects/submit-opportunity`
- `/join/participant`, `/join/institution`, `/join/admin-staff`
- `/dashboard` (participant shell)
- `/subscriber`, `/subscribe`
- `/publishing/signup`

### Admin surfaces (large, partially reusable)
- `/admin/dashboard`
- `/admin/projects`, `/admin/projects/[id]` (+ analytics/media/invites/board)
- `/admin/studio/*`, `/admin/events*`, `/admin/attendance`, `/admin/musicians`, `/admin/settings`
- `/admin/viewer`, `/admin/viewer-sections`, `/admin/viewer-role-overviews`, `/admin/home-slides`

### API surfaces (key product endpoints)
- Booking/request flow: `/api/bookings`, `/api/bookings/community`
- Onboarding/request intake: `/api/admin-requests`, `/api/admin-staff-requests`
- Viewer/admin content: `/api/admin/viewer-sections`, `/api/admin/home-slides`, `/api/home-slides`
- Invite + roster + role ops: `/api/invite-musician`, `/api/confirm-invite`, `/api/admin/set-role`, `/api/sync-roster`
- Monetization: Stripe donation and subscription routes

## 2. Reusable Components / Patterns

### A. Reusable
- `components/portal/*`:
  - `SlideHero`, `HomeSlidesHero`, `PortalNav`, `ProjectGrid`, `ParticipantDashboardClient`, `AdminScaffold`
- `components/participant/*`:
  - `ParticipantShell`, shared UI tokens (`components/participant/ui.ts`)
- Viewer/admin content management:
  - `components/viewer/ViewerEntryManager`, `ViewerSectionsManager`
  - `components/admin/viewer/HomeSlidesManager`
  - `components/admin/areas/AreaRolesEditor`
- Auth/role hooks:
  - `lib/hooks/useUserRole.ts`, `lib/hooks/useProjectAccess.ts`
- Config+route indirection:
  - `lib/config/ngoConfigs.ts`, `lib/config/orchestraConfig.ts`, `lib/portal/routes.ts`, `lib/portal/page-data.ts`

### B. Candidate-to-reuse with refactor
- `app/join/participant/page.tsx` (mirror flow + onboarding logic)
- `app/join/institution/page.tsx` (service-card selection UI)
- `app/viewer/book/page.tsx` (request form + credit tracking)
- `app/admin/layout.tsx` + `lib/config/adminNav.ts` (role-aware admin shell)

## 3. Auth Flow (Current)

### Client auth
- Firebase client initialized in `lib/firebase.ts` (guarded by env checks).
- Primary auth mechanisms in use:
  - Google popup (`signInWithPopup`) in several flows.
  - Email-link auth in `lib/authClient.ts` (`sendSignInLinkToEmail`, `signInWithEmailLink`).
- Role resolution:
  - `useUserRole` checks custom claims first (`beam_admin`, `partner_admin`, `board`, subscriber claims), then falls back to Firestore `users/{uid}`.

### API auth
- API routes validate bearer token via `adminAuth.verifyIdToken`.
- Role gating usually checks `verifyAdminRole(uid)` or claim inspection.
- Note: certain admin routes intentionally bypass strict auth in non-production (`/api/admin/home-slides`, `/api/admin/viewer-sections` style authorization pattern).

## 4. Firebase Usage Audit

### Firebase client/admin setup
- Client: `lib/firebase.ts` -> Firestore/Auth/Storage.
- Admin SDK: `lib/firebase-admin.ts` with fallback initialization from:
  - local `service-account.json`
  - env-based service account
  - application default creds

### Major Firestore collections referenced
- Core org/project: `organizations`, `projects`, `versions`, `musicians`, `projectMusicians`, `users`
- Ops + engagement: `pulseEntries`, `attendance`, `communications`, `prospects`, `adminRequests`, `adminStaffJoinRequests`
- Media/viewer: `projectMedia`, `projectRehearsalMedia`, `viewerAreas`, `viewerSections`, `viewerContent`, `viewerAreaRoles`, `viewerComments`, `viewerDocuments`, `viewerMetadataOptions`, `viewerMetadataSuggestions`
- Monetization: `subscriptions`, `bookingRequests`, `eventOrders`, `eventRSVPs`, `donations`

### Storage usage
- Media URLs and upload flows are used in studio/admin pages and media APIs.

## 5. Dashboard Structure Audit

### Participant dashboard (`/dashboard`)
- `ParticipantShell` + `ParticipantDashboardClient` composition.
- Sections:
  - workspace shortcuts
  - commitments/schedule
  - profile summary
  - open calls
  - viewer role tracks
- Data is currently mixed: mock API (`lib/api/sessions.ts`, `lib/api/users.ts`) + real Firestore role templates.

### Admin dashboard (`/admin/dashboard`)
- Role-gated to beam admins.
- Aggregates across projects/musicians/tickets/media/coin-like metrics.
- Pulls from many collections and computes derived metrics client-side.
- Partner admins are redirected into assigned project context.

## 6. Seed Data + Models Audit

### Seed scripts and files
- `scripts/seed-viewer-library.js` + JSON seeds in `scripts/data/*`:
  - `viewer-library.seed.json`
  - `viewer-area-roles.seed.json`
  - `chamber-series.seed.json`
  - `publishing.seed.json`
  - `viewer-role-overview-test.seed.json`
- Additional seeds:
  - `scripts/seed-modules.ts`
  - `scripts/seed-cities.ts`

### Current model signals (code + docs)
- Type definitions in `lib/types/*` (portal/session/admin tables/booking/events).
- Reference schema doc: `docs/firebase-schema.md` (broad model set; partially aspirational).
- Firestore rules enumerate active collections and role access patterns.

## 7. Service Selection + Request Flow Concepts

Existing concrete flow pieces to port:
- Institutional service picker UX (`/join/institution`) with multi-select offerings + budget sliders.
- Community/performer intake from `/join/participant` -> writes `bookingRequests` via `/api/bookings/community`.
- Subscriber booking flow (`/viewer/book`) -> writes transactional booking requests via `/api/bookings` with credit decrement.
- Admin/staff role cart (`/join/admin-staff`) -> writes `adminStaffJoinRequests`.

## 8. Hardcoded Orchestra-Specific Logic / Copy

### Branding and naming
- Tailwind color namespace `orchestra-*` and repeated style use across many pages.
- Hardcoded labels: `BEAM Orchestra`, `orchestra.BEAM`, `BEAM Orchestra Admin Portal`, etc.
- Default NGO hardcoded: `DEFAULT_NGO = 'orchestra'`.
- Routes/API defaults often fallback to `ngo=orchestra`.

### Media/content assumptions
- Multiple hardcoded URLs in `beam-orchestra-platform` Firebase storage.
- Orchestra-specific section names and role titles embedded in templates and seed content.
- Copy references to orchestra-specific pathways (e.g., repertoire orchestra wording).

### Environment assumptions
- Fallback project IDs include `beam-orchestra-platform`.
- Some service URLs default to orchestra domain names.

## 9. Reusable vs Orchestra-Specific Extraction Matrix

### Reusable now
- Multi-area viewer architecture (`viewerAreas`/`viewerSections`/`viewerContent` + role templates)
- Participant shell and onboarding interaction patterns
- Booking/request API shapes
- Admin shell/navigation patterns (after label/theme config extraction)

### Orchestra-specific to isolate
- Brand tokens (colors/fonts/labels)
- Orchestra copy and terminology
- Orchestra seed content and media assets
- Orchestra-specific defaults in env fallbacks and API query defaults

## 10. Missing for Chorus

### Platform setup
- Firebase project for chorus (Auth, Firestore, Storage)
- Chorus env vars + service account strategy
- Chorus seed set (program config, offerings, media, requests)

### Product foundation
- Chorus program config (`lib/config/programs/chorus.ts`)
- Chorus-specific home/browse/watch/service/join/dashboard/admin route baseline
- Config-driven catalogs for offerings and media rails

### Workflow and governance
- Faculty intake and profile schema (including Dr. Agualay as content data, not architecture hardcode)
- Dashboard rules for participant/faculty/rep/admin visibility
- Deliverable/request status tracking baseline

## 11. Immediate Refactor Targets (Do Before Deep Styling)

1. Split config from implementation:
   - move `orchestraConfig` toward `programs/{program}.ts`
2. Introduce shared domain types independent of page files.
3. Replace hardcoded orchestra defaults in APIs and client fallbacks with program-aware config.
4. Re-home seed logic under a program-aware seed structure.
5. Keep UI shells while swapping content/config to prove chorus parity quickly.

