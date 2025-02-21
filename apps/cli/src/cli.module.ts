import {
  EnvSchema,
  validateEnv,
} from '@libs/common-library/validators/env.validator';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CliService } from './cli.service';

@Module({
  imports: [
    ConfigModule.forRoot<EnvSchema>({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  providers: [CliService],
})
export class CliModule {}
