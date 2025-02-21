import { Module } from '@nestjs/common';
import { ApiController } from '@api/api.controller';
import { ApiService } from '@api/api.service';
import { AuthModule } from '@api/modules/auth/auth.module';
import { PostsModule } from '@api/modules/posts/posts.module';
import { UsersModule } from '@api/modules/users/users.module';
import { DatabaseLibraryModule } from '@libs/database-library';
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
      module: DatabaseLibraryModule,
      global: true,
    },
    PostsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
