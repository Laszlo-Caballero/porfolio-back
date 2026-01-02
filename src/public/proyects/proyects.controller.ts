import { Controller, Get, Param } from '@nestjs/common';
import { ProyectsService } from './proyects.service';

@Controller('public/proyects')
export class ProyectsController {
  constructor(private readonly proyectsService: ProyectsService) {}

  @Get()
  getAll() {
    return this.proyectsService.getAll();
  }

  @Get('outstanding')
  getOutstanding() {
    return this.proyectsService.getOutstanding();
  }

  @Get('slug/:slug')
  getBySlug(@Param('slug') slug: string) {
    return this.proyectsService.getBySlug(slug);
  }
}
