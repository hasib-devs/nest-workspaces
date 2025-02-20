import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthLibraryService } from '@libs/auth-library';

@Injectable()
export class UsersService {
  constructor(private readonly authLibrary: AuthLibraryService) {
    console.log('UsersService created');
  }

  create(createUserDto: CreateUserDto) {
    const userData = this.authLibrary.findUser();
    console.log({ user: userData });
    return {
      ...createUserDto,
      userData,
    };
  }

  findAll() {
    const userData = this.authLibrary.findUser();
    console.log({ user: userData });
    return {
      userData,
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
