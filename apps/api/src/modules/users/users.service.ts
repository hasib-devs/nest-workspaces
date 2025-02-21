import { DrizzleOrm, DrizzleOrmProvider, usersTable } from '@libs/drizzle-orm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(@Inject(DrizzleOrmProvider) private readonly db: DrizzleOrm) {}

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  async findAll() {
    return this.db.select().from(usersTable);
  }

  findOne(identifier: string) {
    // const data = await this.orm.mikro.em.findAll(MediaEntity);
    return {
      id: 1,
      name: 'John Doe',
      email: 'email@example.com',
      role: 'admin',
      identifier,
    };
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
