import { Module } from '@nestjs/common';
import { CliService } from './cli.service';
import { ORMLibraryModule } from '@libs/orm-library';
import { ConfigModule } from '@nestjs/config';
import {
  EnvSchema,
  validateEnv,
} from '@libs/common-library/validators/env.validator';

@Module({
  imports: [
    ConfigModule.forRoot<EnvSchema>({
      isGlobal: true,
      validate: validateEnv,
    }),
    {
      module: ORMLibraryModule,
      global: true,
    },
  ],
  providers: [CliService],
})
export class CliModule {}
