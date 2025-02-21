import { Module } from '@nestjs/common';
import { ConfigLibraryModule } from '@libs/config-library';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseLibraryModule } from '@libs/database-library';

@Module({
  imports: [
    {
      module: ConfigLibraryModule,
      global: true,
    },
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
