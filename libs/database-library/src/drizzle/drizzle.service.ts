import { Injectable } from '@nestjs/common';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@libs/database-library/drizzle/schemas';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { EnvValidator } from '@api/common/validators/env.validator';

@Injectable()
export class DrizzleService {
  public readonly drizzle: NodePgDatabase<typeof schema>;
  constructor(private readonly configService: ConfigService<EnvValidator>) {
    const pool = new Pool({
      host: this.configService.get('PG_DB_HOST'),
      port: this.configService.get('PG_DB_PORT'),
      user: this.configService.get('PG_DB_USER'),
      password: this.configService.get('PG_DB_PASSWORD'),
      database: this.configService.get('PG_DB_NAME'),
    });

    this.drizzle = drizzle<typeof schema>(pool, { schema });
  }
}
