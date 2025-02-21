import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor() {}

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  findAll() {
    return {
      data: [],
    };
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
