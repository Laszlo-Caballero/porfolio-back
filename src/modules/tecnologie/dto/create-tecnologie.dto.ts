import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateTecnologieDto {
  @IsUrl()
  @IsNotEmpty()
  urlImage: string;

  @IsNotEmpty()
  @IsString()
  altImage: string;
}
