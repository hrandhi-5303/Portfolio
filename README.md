# Hemasree Randhi — Portfolio

A responsive Next.js portfolio with an ivory palette, original inline SVG illustrations, a greeting animation, and three case-study routes.

## Preview locally

```sh
git switch feature/portfolio-redesign
npm ci
npm run dev
```

Open http://localhost:3000. To preview the production build:

```sh
npm run build
npm start
```

## Checks

```sh
npx tsc --noEmit
npm run build
```

## Content and integrations

- Homepage: `app/page.tsx`; case-study and toolkit content: `content/portfolio.ts`.
- Case studies: `/work/reconciliation-engine`, `/work/cloud-data-platform`, and `/work/ai-data-intelligence`.
- Reconciliation Engine and Cloud Data Platform describe user-supplied enterprise engineering experience. AI & Data Intelligence is explicitly labeled a concept / proposed prototype. Existing academic projects remain separate.
- Original SVG art: `components/Illustration.tsx`. Motion respects reduced-motion preferences; scroll content remains visible without JavaScript.
- The existing resume remains at `/Hemasree_Resume.pdf`.
- The contact form retains Formspree endpoint `https://formspree.io/f/mblzgdob`, honeypot, submission fields, success/reset behavior, and error handling. Local preview needs internet access for actual delivery. Do not send test messages to the live endpoint for automated checks.
- No photographs or stock imagery are rendered. The pre-existing photo file remains unused in the repository.

Changes are isolated to `feature/portfolio-redesign`. No merge or production deployment is included.
