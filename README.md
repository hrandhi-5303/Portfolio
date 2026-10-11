# Hemasree Randhi — Portfolio

A responsive Next.js portfolio with an ivory palette, original inline SVG illustrations, a greeting animation, and four case-study routes.

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
