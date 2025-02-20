import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
