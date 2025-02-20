import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthLibraryService {
  public findUser() {
    const name = 'NestJS';
    console.log({ name });
    return {
      name,
    };
  }
}
