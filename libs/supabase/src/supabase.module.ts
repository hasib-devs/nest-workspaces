import { Module } from '@nestjs/common';
import { SupabaseFactory, SupabaseProvider } from './supabase.provider';

@Module({
  providers: [SupabaseFactory],
  exports: [SupabaseProvider],
})
export class SupabaseModule {}
