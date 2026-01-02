import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';

@Controller('public/experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  getAll() {
    return this.experienceService.getAll();
  }
}
