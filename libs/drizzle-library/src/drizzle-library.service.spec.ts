import { Test, TestingModule } from '@nestjs/testing';
import { DrizzleLibraryService } from './drizzle-library.service';

describe('DrizzleLibraryService', () => {
  let service: DrizzleLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrizzleLibraryService],
    }).compile();

    service = module.get<DrizzleLibraryService>(DrizzleLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
