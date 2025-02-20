import { Module } from '@nestjs/common';
import { ConfigLibraryModule } from 'libs/config-library';
import {
  DrizzleAsyncProvider,
  DrizzleLibraryProvider,
} from './drizzle-library.provider';
import { DrizzleLibraryService } from './drizzle-library.service';

@Module({
  imports: [ConfigLibraryModule],
  providers: [DrizzleLibraryService, DrizzleLibraryProvider],
  exports: [DrizzleLibraryService, DrizzleAsyncProvider],
})
export class DrizzleLibraryModule {}
