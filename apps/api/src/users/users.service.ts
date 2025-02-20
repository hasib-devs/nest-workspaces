import {
  Database,
  DrizzleAsyncProvider,
} from '@libs/drizzle-library/drizzle-library.provider';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db: Database,
  ) {
    //
  }

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  async findAll() {
    // const data = await this.db.select().from(usersTable).execute();
    const data = await this.db.query.usersTable.findMany({
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
