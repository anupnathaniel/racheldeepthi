# Truly Nourish™

Official website for Truly Nourish™ by Rachel Deepthi, a Registered Dietitian and Nutritionist based in Chennai.

The website presents Rachel’s nutrition programs, professional profile, media appearances, corporate wellness work, community initiatives and approved client experiences. Enquiries are transferred to Rachel’s business WhatsApp as a prefilled message for the visitor to review and send.

## Technology

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Run locally

Requirements: Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm run lint
pnpm run typecheck
pnpm run test
```

The production build is written to `out/`.

## Content updates

- Update contact details and professional links in `data/site.ts`.
- Update nutrition programs in `data/programs.ts`.
- Update YouTube titles and IDs in `data/videos.ts`.
- Update approved articles and thumbnails in `data/media.ts`.
- Update approved testimonials and transformation images in `data/testimonials.ts`.
- Store approved local media in `public/images/` and brand icons in `public/icons/`.

Client images must remain approved for publication and privacy masking must not be removed.

## WhatsApp enquiries

The contact form validates the required fields in the browser. When the visitor continues, the completed details are formatted into a message addressed to Rachel’s business WhatsApp. WhatsApp then asks the visitor to review and send the message.

The business number and default direct-message link are maintained in `data/site.ts`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` builds and publishes the static website whenever `main` is updated.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Run the **Deploy website to GitHub Pages** workflow if it has not started automatically.

For the repository `anupnathaniel/racheldeepthi`, the default Pages address is:

`https://anupnathaniel.github.io/racheldeepthi/`

If a custom domain is added later, update `NEXT_PUBLIC_SITE_URL` and remove the repository subpath from `NEXT_PUBLIC_BASE_PATH` in the Pages workflow.

## Environment variables

Copy `.env.example` to `.env.local` only when local overrides are needed.

- `NEXT_PUBLIC_SITE_URL`: canonical public website address.
- `NEXT_PUBLIC_BASE_PATH`: GitHub Pages repository path, such as `/racheldeepthi`.

Do not commit private credentials or confidential client information.
