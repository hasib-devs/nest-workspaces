import { Injectable } from '@nestjs/common';

@Injectable()
export class CliService {
  constructor() {}
  run() {
    console.log('Running CLI service');
  }
}
