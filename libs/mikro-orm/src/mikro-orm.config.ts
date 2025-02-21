import * as dotenv from 'dotenv';
dotenv.config();

import { defineConfig, MongoDriver } from '@mikro-orm/mongodb';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as entities from './entities';

export const NOSQL_DB_HOST = process.env.NOSQL_DB_HOST || 'localhost';
export const NOSQL_DB_PORT = Number(process.env.NOSQL_DB_PORT || 27017);
export const NOSQL_DB_USER = process.env.NOSQL_DB_USER;
export const NOSQL_DB_PASSWORD = process.env.NOSQL_DB_PASSWORD;
export const NOSQL_DB_NAME = process.env.NOSQL_DB_NAME || 'nest-quickstart';

const clientUrl =
  NOSQL_DB_USER && NOSQL_DB_PASSWORD
    ? `mongodb://${NOSQL_DB_USER}:${encodeURIComponent(NOSQL_DB_PASSWORD)}@${NOSQL_DB_HOST}:${NOSQL_DB_PORT}/${NOSQL_DB_NAME}`
    : `mongodb://${NOSQL_DB_HOST}:${NOSQL_DB_PORT}/${NOSQL_DB_NAME}`;

export default defineConfig({
  driver: MongoDriver,
  clientUrl,
  debug: true,
  entities: [...Object.values(entities)],
  metadataProvider: TsMorphMetadataProvider,
});
