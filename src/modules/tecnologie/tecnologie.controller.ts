import { Controller, Get, Post, Body } from '@nestjs/common';
import { TecnologieService } from './tecnologie.service';
import { CreateTecnologieDto } from './dto/create-tecnologie.dto';
import { InsertManyTecnologieDto } from './dto/InsertMany.dto';
import { Auth } from '../../common/decorator/auth/auth.decorator';
import { RoleEnum } from '../../common/enum/Role.enum';

@Controller('tecnologie')
export class TecnologieController {
  constructor(private readonly tecnologieService: TecnologieService) {}

  @Auth([RoleEnum.ADMIN])
  @Post()
  create(@Body() createTecnologieDto: CreateTecnologieDto) {
    return this.tecnologieService.create(createTecnologieDto);
  }

  @Auth([RoleEnum.ADMIN])
  @Post('insert-many')
  insertMany(@Body() insertManyTecnologieDto: InsertManyTecnologieDto) {
    return this.tecnologieService.insertMany(insertManyTecnologieDto);
  }

  @Auth([RoleEnum.ADMIN])
  @Get()
  findAll() {
    return this.tecnologieService.findAll();
  }
}
