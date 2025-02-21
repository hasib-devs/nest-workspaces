import * as schema from './schemas';

import { EnvValidationSchema } from '@libs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export const DrizzleOrmProvider = 'DrizzleOrmProvider';

export const DrizzleOrmFactory = {
  provide: DrizzleOrmProvider,
  useFactory: (configService: ConfigService<EnvValidationSchema>) => {
    const host = configService.get<string>('PG_DB_HOST');
    const port = configService.get<number>('PG_DB_PORT');
    const user = configService.get<string>('PG_DB_USER');
    const password = configService.get<string>('PG_DB_PASSWORD');
    const database = configService.get<string>('PG_DB_NAME');

    const url = `postgresql://${user}:${password}@${host}:${port}/${database}`;

    const client = postgres(url, { prepare: false });

    return drizzle<typeof schema>(client, { schema });
  },
  inject: [ConfigService],
};

export type DrizzleOrm = PostgresJsDatabase<typeof schema>;
