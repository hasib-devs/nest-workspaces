import { Module } from '@nestjs/common';
import { DrizzleOrmService } from './drizzle-orm.service';

@Module({
  providers: [DrizzleOrmService],
  exports: [DrizzleOrmService],
})
export class DrizzleOrmModule {}
