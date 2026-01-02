import { ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateTecnologieDto } from './create-tecnologie.dto';

export class InsertManyTecnologieDto {
  @ValidateNested({ each: true })
  @Type(() => CreateTecnologieDto)
  @ArrayMinSize(1)
  tecnologies: CreateTecnologieDto[];
}
