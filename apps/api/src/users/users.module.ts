import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthLibraryModule, AuthLibraryService } from '@libs/auth-library';

@Module({
  imports: [AuthLibraryModule],
  controllers: [UsersController],
  providers: [UsersService, AuthLibraryService],
})
export class UsersModule {}
