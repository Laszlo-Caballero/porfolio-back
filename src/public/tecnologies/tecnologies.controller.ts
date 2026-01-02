import { Controller, Get } from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';

@Controller('public/tecnologies')
export class TecnologiesController {
  constructor(private readonly tecnologiesService: TecnologiesService) {}

  @Get()
  getAll() {
    return this.tecnologiesService.getAll();
  }
}
