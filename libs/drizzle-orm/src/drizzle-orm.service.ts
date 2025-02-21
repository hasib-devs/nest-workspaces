import { Injectable } from '@nestjs/common';
import { PostgresJsDatabase, drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schemas';
import { ConfigService } from '@nestjs/config';
// import { Pool } from 'postgres';
import { EnvValidationSchema } from '@libs/common';
import postgres from 'postgres';

@Injectable()
export class DrizzleOrmService {
  public readonly drizzle: PostgresJsDatabase<typeof schema>;
  constructor(
    private readonly configService: ConfigService<EnvValidationSchema>,
  ) {
    const host = this.configService.get<string>('PG_DB_HOST');
    const port = this.configService.get<number>('PG_DB_PORT');
    const user = this.configService.get<string>('PG_DB_USER');
    const password = this.configService.get<string>('PG_DB_PASSWORD');
    const database = this.configService.get<string>('PG_DB_NAME');

    const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
    const client = postgres(connectionString, { prepare: false });

    this.drizzle = drizzle<typeof schema>(client, { schema });
  }
}
