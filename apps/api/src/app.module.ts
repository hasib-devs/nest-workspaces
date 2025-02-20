import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigLibraryModule } from 'libs/config-library';
import { DrizzleLibraryModule } from '@libs/drizzle-library';

@Module({
  imports: [
    {
      module: ConfigLibraryModule,
      global: true,
    },
    {
      module: DrizzleLibraryModule,
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
