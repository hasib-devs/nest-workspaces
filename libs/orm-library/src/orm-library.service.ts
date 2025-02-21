import { Injectable } from '@nestjs/common';
import { DrizzleService } from './drizzle/drizzle.service';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@libs/orm-library/drizzle/schemas';
import { MikroORM } from '@mikro-orm/mongodb';
@Injectable()
export class ORMLibraryService {
  public readonly drizzle: NodePgDatabase<typeof schema>;
  public readonly mikro: MikroORM;
  constructor(
    private readonly drizzleService: DrizzleService,
    private readonly mikroOrm: MikroORM,
  ) {
    this.drizzle = this.drizzleService.drizzle;
    this.mikro = this.mikroOrm;
  }
}
