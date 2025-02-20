import { Module } from '@nestjs/common';
import { DrizzleLibraryService } from './drizzle-library.service';

@Module({
  imports: [],
  providers: [DrizzleLibraryService],
  exports: [DrizzleLibraryService],
})
export class DrizzleLibraryModule {}
