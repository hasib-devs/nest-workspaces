import { Injectable } from '@nestjs/common';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';
import * as schema from 'database/drizzle/schemas';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';

@Injectable()
export class DrizzleLibraryService {
  public readonly db: NodePgDatabase<typeof schema>;
  constructor(private readonly configService: ConfigService) {
    const pool = new Pool({
      host: this.configService.get<string>('PG_DB_HOST'),
      port: this.configService.get<number>('PG_DB_PORT'),
      user: this.configService.get<string>('PG_DB_USER'),
      password: this.configService.get<string>('PG_DB_PASSWORD'),
      database: this.configService.get<string>('PG_DB_NAME'),
    });

    this.db = drizzle<typeof schema>(pool, { schema });
  }
}
