import { EnvValidationSchema, validateEnv } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CliService } from './cli.service';

@Module({
  imports: [
    ConfigModule.forRoot<EnvValidationSchema>({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  providers: [CliService],
})
export class CliModule {}
