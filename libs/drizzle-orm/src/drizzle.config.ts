import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'drizzle-kit';
const host = process.env.PG_DB_HOST || 'localhost';
const port = Number(process.env.PG_DB_PORT || 5432);
const user = process.env.PG_DB_USER;
const password = process.env.PG_DB_PASSWORD;
const databaseName = process.env.PG_DB_NAME || 'nest-quickstart';

// const url = `postgresql://postgres.afxphdapyxedkhiwifnx:NestApp@aws-0-us-west-1.pooler.supabase.com:6543/postgres`;
const url = `postgresql://${user}:${password}@${host}:${port}/${databaseName}`;

export default defineConfig({
  dialect: 'postgresql',
  schema: 'libs/drizzle-orm/src/schemas/index.ts',
  out: 'libs/drizzle-orm/src/migrations',
  strict: true,
  verbose: true,
  breakpoints: true,
  dbCredentials: { url },
});
