import { Module } from '@nestjs/common';
import { ConfigLibraryModule } from '@libs/config-library';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '@libs/database';

@Module({
  imports: [
    {
      module: ConfigLibraryModule,
      global: true,
    },
    {
      module: DatabaseModule,
      global: true,
    },
    PostsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
