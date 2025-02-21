import { ORMLibraryService } from '@libs/orm-library';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CliService {
  constructor(private readonly orm: ORMLibraryService) {}
  run() {
    console.log('Running CLI service');
  }
}
