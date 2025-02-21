import { Injectable } from '@nestjs/common';
// import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  constructor(private readonly configService: ConfigService) {}
}
