import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'drizzle-kit';
export const PG_DB_HOST = process.env.PG_DB_HOST || 'localhost';
export const PG_DB_PORT = Number(process.env.PG_DB_PORT || 5432);
export const PG_DB_USER = process.env.PG_DB_USER;
export const PG_DB_PASSWORD = process.env.PG_DB_PASSWORD;
export const PG_DB_NAME = process.env.PG_DB_NAME || 'nest-quickstart';

const URL = `postgresql://${PG_DB_USER}:${PG_DB_PASSWORD}@${PG_DB_HOST}:${PG_DB_PORT}/${PG_DB_NAME}`;

export default defineConfig({
  dialect: 'postgresql',
  schema: 'libs/orm-library/src/drizzle/schemas/index.ts',
  out: 'libs/database/src/drizzle/migrations',
  strict: true,
  verbose: true,
  breakpoints: true,
  dbCredentials: {
    url: URL,
  },
});
