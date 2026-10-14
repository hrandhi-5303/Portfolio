# Hemasree Randhi — Portfolio

A responsive Next.js portfolio with a white minimalist layout, original inline SVG illustrations, a greeting animation, and four case-study routes.

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
npm run lint
npm run build
```

## Content and integrations

- Homepage: `app/page.tsx`; case-study and toolkit content: `content/portfolio.ts`.
- Case studies: `/work/reconciliation-engine`, `/work/financial-data-reconciliation`, `/work/telecom-data-analytics`, and `/work/ai-data-intelligence`.
- Professional identity, experience, technical skills, education, and achievements follow the latest attached `Hemasree_Randhi.docx`. The primary case studies represent GlobalLogic (client: T-Mobile), Fiserv, and Sasken Technologies, in that order.
- AI & Data Intelligence remains a separate, clearly labeled research concept. Earlier projects are retained in Other Things I've Built.
- The current source resume is at `/Hemasree_Randhi.docx`. `/Hemasree_Resume.pdf` is a PDF conversion of its complete content, generated locally using Pandoc HTML and Chromium printing. The download links serve this current PDF.
- Education includes the MS at University of Central Oklahoma and BTech at Andhra University, India, plus current PhD studies in Artificial Intelligence confirmed by the user. No doctoral institution or dates are specified.
- Original SVG art: `components/Illustration.tsx`. Motion respects reduced-motion preferences; scroll content remains visible without JavaScript.
- The previous `/work/cloud-data-platform` URL redirects to the updated financial engineering case study.
- The contact form retains Formspree endpoint `https://formspree.io/f/mblzgdob`, honeypot, submission fields, success/reset behavior, and error handling. Local preview needs internet access for actual delivery. Do not send test messages to the live endpoint for automated checks.
- No photographs or stock imagery are rendered. The pre-existing photo file remains unused in the repository.

Changes are isolated to `feature/portfolio-redesign`. No merge or production deployment is included.

## Visual direction

The layout uses bold sans-serif headlines, small monospaced navigation and section labels, generous whitespace, and thin dividers. The waving illustration sits above the homepage introduction. Selected work uses illustrated text rows; earlier projects use a compact gallery; engineering steps use small diagrams; skills use expandable categories; experience uses a dated timeline. About, Contact, and case studies share the same restrained styling. The design is inspired by the supplied reference while retaining original artwork and verified portfolio content.

## SEO and navigation icons

`lib/seo.ts` centralizes the current title, description, canonical domain, and verified Person schema. The homepage uses the non-www HTTPS canonical URL; case studies have unique canonical, Open Graph, and Twitter metadata. `app/sitemap.ts` lists the homepage and case studies, while `app/robots.ts` exposes the sitemap and excludes the thank-you page. `next.config.mjs` permanently redirects www requests to non-www. Both domains must resolve to the same hosting project for this application redirect to run.

All navigation arrows use `components/ArrowUpRight.tsx`, with inherited color, a shared 18px size, and rounded 1.6px strokes. The hand-drawn illustrations use 2px strokes, and CSS centralizes hover, reveal, greeting, and data-flow timing.

These changes do not update production until deployed. Google may retain its earlier search snippet until it recrawls the deployed pages; request indexing of the canonical homepage in Google Search Console after deployment.
