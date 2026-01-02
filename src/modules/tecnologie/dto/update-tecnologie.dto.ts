import { PartialType } from '@nestjs/mapped-types';
import { CreateTecnologieDto } from './create-tecnologie.dto';

export class UpdateTecnologieDto extends PartialType(CreateTecnologieDto) {}
