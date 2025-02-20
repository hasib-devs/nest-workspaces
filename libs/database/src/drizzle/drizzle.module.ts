import { Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';

@Module({
  imports: [],
  providers: [DrizzleService],
  exports: [DrizzleService],
})
export class DrizzleModule {}
