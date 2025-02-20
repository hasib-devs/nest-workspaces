import { Module } from '@nestjs/common';
import { DatabaseLibraryService } from './database-library.service';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [DatabaseLibraryService],
  exports: [DatabaseLibraryService],
})
export class DatabaseLibraryModule {}
