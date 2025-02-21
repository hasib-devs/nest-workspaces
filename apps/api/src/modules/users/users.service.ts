import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseLibraryService } from '@libs/database-library';

@Injectable()
export class UsersService {
  constructor(private readonly db: DatabaseLibraryService) {}

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

  findOne(identifier: string) {
    return `This action returns a #${identifier} user`;
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
