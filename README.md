# Stores service

Part of the QAVRIL LABS ERP, built as a separate product. Owned by the backend lane.

- **Scope:** INV-01 to INV-05, INV-07, INV-10, PRC-04 (goods receipt)
- **API prefix:** `/v1/stores`
- **Database:** Neon project `qavril-stores`, database `stores`
- **Contract:** `contracts/stores.openapi.yaml` in the `home` repository (reviewed by the frontend lane)

## Run locally

```bash
npm ci
cp .env.example .env
npm run dev          # http://localhost:3000/health
npm test
```

## Checks

`npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, and `docker build .`. CI runs them on every push and pull request.

## Rules

- No secrets in the code or in `.env.example`. Secrets come from AWS Secrets Manager.
- Money is `bigint` minor units. Amounts cross the API as decimal strings.
- Every tenant table has `tenant_id` and row-level security. Query tenant data only through the tenant transaction helper.
