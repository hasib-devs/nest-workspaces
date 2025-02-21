import { Controller, Get } from '@nestjs/common';
import { ApiService } from '@api/api.service';

@Controller()
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Get()
  index(): string {
    return this.appService.index();
  }
}
