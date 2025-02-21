import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DrizzleOrmModule } from '@libs/drizzle-orm';

@Module({
  imports: [DrizzleOrmModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
