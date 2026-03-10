# BEAM Shared Architecture

## Goal
Treat orchestra and chorus as program variants of one platform:
- shared domain model
- shared route skeleton
- program-configurable branding/content
- program-specific seeds and Firebase projects

## 1. Recommended Structure

```txt
app/
  page.tsx
  browse/page.tsx
  watch/[slug]/page.tsx
  services/page.tsx
  join/page.tsx
  dashboard/page.tsx
  admin/page.tsx
  api/

components/
  layout/
  media/
  services/
  dashboard/
  forms/
  shared/

lib/
  config/
    programs/
      orchestra.ts
      chorus.ts
      index.ts
  firebase/
    client.ts
    admin.ts
  auth/
  data/
    seed/
      orchestra.ts
      chorus.ts
    rails.ts
    offerings.ts
  services/
    requests.ts
  utils/

types/
  domain.ts
  program.ts
```

## 2. Shared Domain Models (Initial)

Use these cross-program types in `types/domain.ts`:
- `Program`
- `User`
- `Offering`
- `MediaItem`
- `ServiceRequest`
- `Deliverable`

Practical extension fields to include early:
- `programId` on all content/request records
- `visibility` and `roleAccess` for viewer/dashboard gating
- `metadata` map for program-specific non-breaking additions

## 3. Config-Driven Program Branding

Define per-program config in `lib/config/programs/*.ts`:
- identity: `id`, `name`, `type`, `domain`, `description`
- branding tokens: colors, typography, key gradients
- route copy: nav labels, CTA text, section headings
- content defaults: featured rails, homepage modules, service category labels

Rules:
1. No hardcoded `orchestra`/`chorus` strings in page components.
2. UI references program tokens (`program.branding.*`) not direct color class names.
3. API defaults never assume a single program; resolve from config/env/route context.

## 4. Data + Persistence Strategy

### Firebase
- Keep one Firebase project per program during early rollout:
  - `beam-orchestra-platform`
  - `beam-chorus-platform` (new)
- Keep collection names consistent across programs to preserve shared code.

### Collection baseline
- `users`
- `offerings`
- `mediaItems` (or normalized `viewerContent` if preserving current model)
- `serviceRequests`
- `deliverables`
- optional viewer/admin support collections as needed

### Seed strategy
- Program seeds should be isolated files:
  - `lib/data/seed/orchestra.ts`
  - `lib/data/seed/chorus.ts`
- Seed runners should accept `programId` and write shared schema shapes.

## 5. Migration Plan

## Phase A: Extract
1. Lift reusable shells/components/hooks from orchestra into shared folders.
2. Move hardcoded orchestra copy/colors/media into `programs/orchestra.ts`.
3. Introduce shared types and adapt existing code to use them.

## Phase B: Establish Chorus Foundation
1. Add chorus program config.
2. Add core routes with placeholder content wired to shared layout and mock seed data.
3. Add minimal service flow and dashboard shell based on shared models.

## Phase C: Wire Firebase
1. Add Firebase client/admin wrappers in `lib/firebase/*`.
2. Add env templates for chorus.
3. Replace mock adapters route-by-route with Firestore adapters.

## Phase D: Program Parity
1. Implement media browse/watch parity.
2. Implement offering selection + request submission parity.
3. Implement deliverable/status dashboard parity.

## Phase E: Chorus Identity Pass
1. Apply chorus typography/color/motion via program tokens.
2. Refine rails/hero/content emphasis for voice/community storytelling.
3. Keep structural parity with orchestra; diverge only in config and content.

## 6. Reusable vs Program-Specific Boundaries

### Keep shared
- route skeleton and page composition logic
- auth hooks and role enforcement patterns
- request lifecycle/status utilities
- dashboard containers and generic cards/tables

### Keep program-specific
- naming/terminology
- hero/media imagery
- offering catalog values
- faculty profiles, testimonials, case studies
- seed data payloads

## 7. Anti-Patterns to Avoid

- Copy/paste from orchestra pages with inline renamed strings.
- Storing program identity in many ad-hoc booleans.
- Hardcoding Firebase bucket IDs or domains inside UI code.
- Tying faculty identities to schema keys (e.g., `drAgualay*` fields).

## 8. Definition Of “Chorus Foundation Complete”

You are foundation-complete when:
1. Shared types exist and compile.
2. Core routes exist (`home/browse/watch/services/join/dashboard/admin`).
3. Program config can switch orchestral vs choral voice without page rewrites.
4. Mock seed data drives UI for all major routes.
5. Firebase wiring points are in place, even if partially stubbed.

