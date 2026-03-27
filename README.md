# My Charlotte 2.0

## Project structure

- `app/`: Vite + React + tRPC client
- `express/`: Express + tRPC server
- `shared/`: shared env validation (Zod) and other shared code

## Prereqs

- Node.js (recommended: latest LTS)
- `pnpm` (repo expects `pnpm@10.18.3`)
- A MongoDB instance (local or hosted)

## Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create your env file:

   ```bash
   cp .env.example .env
   ```

   Fill in at least:
   - `DATABASE_URL` (Mongo connection string)
   - `VITE_EXPRESS_PORT` (default `3001`)

3. Start dev servers (app + express):

   ```bash
   pnpm dev
   ```

## Useful scripts

- `pnpm dev`: start both frontend and backend servers together
- `pnpm lint`: lint all packages in the monorepo
- `pnpm -C app dev`: run only the frontend development server (Vite)
- `pnpm -C express dev`: run only the backend development server (Express)
