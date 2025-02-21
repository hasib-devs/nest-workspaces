import { DatabaseLibraryService } from '@libs/database-library';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CliService {
  constructor(private readonly db: DatabaseLibraryService) {}
  run() {
    console.log('Running CLI service');
  }
}
