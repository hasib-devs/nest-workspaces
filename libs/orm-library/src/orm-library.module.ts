import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';
import { MikroModule } from './mikro/mikro.module';
import { ORMLibraryService } from './orm-library.service';

@Module({
  imports: [DrizzleModule, MikroModule],
  providers: [ORMLibraryService],
  exports: [ORMLibraryService],
})
export class ORMLibraryModule {}
