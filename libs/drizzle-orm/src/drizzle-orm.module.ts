import { Module } from '@nestjs/common';
import { DrizzleOrmFactory, DrizzleOrmProvider } from './drizzle-orm.provider';

@Module({
  providers: [DrizzleOrmFactory],
  exports: [DrizzleOrmProvider],
})
export class DrizzleOrmModule {}
