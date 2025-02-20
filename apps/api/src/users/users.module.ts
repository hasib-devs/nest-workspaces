import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DrizzleLibraryModule } from '@libs/drizzle-library';

@Module({
  imports: [DrizzleLibraryModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
