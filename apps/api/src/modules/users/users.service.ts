import { DrizzleOrm, DrizzleOrmProvider, usersTable } from '@libs/drizzle-orm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SupabaseProvider } from '@libs/supabase';
import { SupabaseClient } from '@supabase/supabase-js';
@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleOrmProvider) private readonly drizzle: DrizzleOrm,
    @Inject(SupabaseProvider) private readonly supabase: SupabaseClient,
  ) {}

  create(createUserDto: CreateUserDto) {
    return {
      ...createUserDto,
    };
  }

  async findAll() {
    return this.drizzle.select().from(usersTable);
  }

  findOne(identifier: string) {
    console.log({ supabase: this.supabase });
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
