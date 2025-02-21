import { EnvValidationSchema } from '@libs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const SupabaseProvider = 'SupabaseProvider';

export const SupabaseFactory = {
  provide: SupabaseProvider,
  inject: [ConfigService],
  useFactory: (
    configService: ConfigService<EnvValidationSchema>,
  ): SupabaseClient => {
    const url = configService.get<string>('SUPABASE_URL') as string;
    const key = configService.get<string>('SUPABASE_KEY') as string;

    return createClient(url, key);
  },
};
