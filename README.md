# Project Name

> **Using this template** (delete this block after setup)
>
> - [ ] Rename `name` in `package.json` and the `<title>` in `index.html`
> - [ ] Change `APP_STORAGE_PREFIX` in `src/shared/config/app.ts` to the project name
> - [ ] Replace the colors in `src/app/styles/index.css` and, if needed, the font in `src/app/main.tsx`
> - [ ] Update `app.name` and `home` texts in `src/shared/config/i18n/locales`
> - [ ] Recreate the `main` ruleset on GitHub (require PR + `quality` check)
> - [ ] Create `.env.local` if the project uses environment variables (never commit it)
> - [ ] Run `npm ci` once so husky installs the pre-commit hook
> - [ ] Replace `REPO_NAME` below and fill in every section

![CI](https://github.com/RodrigoMedeiros20/REPO_NAME/actions/workflows/ci.yml/badge.svg)

One sentence explaining what the project does and who it is for.

**Live demo:** https://link-to-the-deployed-app

![Screenshot](docs/screenshot.png)

## The problem

What real need this project solves and why it matters.

## Features

- Feature one
- Feature two

## Tech stack

- React + TypeScript (Vite)
- Tailwind CSS + shadcn/ui
- React Router
- i18next (Portuguese and English)
- Vitest + Testing Library
- ESLint + Prettier + husky + lint-staged
- GitHub Actions

## Architecture

The code follows [Feature-Sliced Design](https://feature-sliced.design):

```
src/
  app/        entry point, router, layouts and global styles
  pages/      one folder per route
  widgets/    large UI blocks reused across pages
  features/   user actions (toggle theme, change language...)
  entities/   business objects
  shared/     UI kit, config, helpers and test setup
```

A layer can only import from the layers below it. Each slice exposes its public API through an `index.ts`, and ESLint blocks imports that break these rules.

## Getting started

Requirements: Node.js 26+

```bash
git clone https://github.com/RodrigoMedeiros20/REPO_NAME.git
cd REPO_NAME
npm ci
npm run dev
```

## Scripts

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Start the development server   |
| `npm run test`         | Run tests in watch mode        |
| `npm run test:run`     | Run tests once                 |
| `npm run lint`         | Check code quality             |
| `npm run format`       | Format all files with Prettier |
| `npm run format:check` | Check formatting (used in CI)  |
| `npm run build`        | Build for production           |

## Technical decisions

- Why I chose X instead of Y.

## Next steps

- What I would improve next.
