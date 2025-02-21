import { Module } from '@nestjs/common';
import { ConfigLibraryService } from './config-library.service';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './env.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  providers: [ConfigLibraryService],
  exports: [ConfigLibraryService],
})
export class ConfigLibraryModule {}
