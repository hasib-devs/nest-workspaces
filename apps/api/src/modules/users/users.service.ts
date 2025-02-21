import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ORMLibraryService } from '@libs/orm-library';
import { MediaEntity } from '@libs/orm-library/mikro/entities/media.entity';

@Injectable()
export class UsersService {
  constructor(private readonly orm: ORMLibraryService) {}

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  async findAll() {
    const data = await this.orm.drizzle.query.usersTable.findMany({
      with: {
        posts: true,
      },
    });
    return {
      data,
    };
  }

  async findOne(identifier: string) {
    const data = await this.orm.mikro.em.find(MediaEntity, {});
    return {
      data,
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
