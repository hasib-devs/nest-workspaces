import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  index(): string {
    return 'Hello World!';
  }
}
