import { Module } from '@nestjs/common';
import { ConfigLibraryService } from './config-library.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigLibraryService],
  exports: [ConfigLibraryService],
})
export class ConfigLibraryModule {}
