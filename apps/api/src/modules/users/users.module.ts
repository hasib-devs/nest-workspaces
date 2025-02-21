import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DrizzleOrmModule } from '@libs/drizzle-orm';
import { SupabaseModule } from '@libs/supabase';

@Module({
  imports: [DrizzleOrmModule, SupabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
