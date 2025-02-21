import { Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { Supabase } from './supabase/supabase';
import { SupServiceService } from './sup-service/sup-service.service';

@Module({
  providers: [SupabaseService, Supabase, SupServiceService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
