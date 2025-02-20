import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseService } from '@libs/database';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseService) {}

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  async findAll() {
    const data = await this.db.drizzle.query.usersTable.findMany({
      with: {
        posts: true,
      },
    });
    return {
      data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      id,
      ...updateUserDto,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
