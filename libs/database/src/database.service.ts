import { Injectable } from '@nestjs/common';
import { DrizzleService } from './drizzle/drizzle.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@libs/database/drizzle/schemas';

@Injectable()
export class DatabaseService {
  public readonly drizzle: NodePgDatabase<typeof schema>;
  constructor(private readonly drizzleService: DrizzleService) {
    this.drizzle = this.drizzleService.drizzle;
  }
}
