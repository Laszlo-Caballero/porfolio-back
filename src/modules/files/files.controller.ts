import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UploadedFile,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from '../../common/decorator/auth/auth.decorator';
import { RoleEnum } from '../../common/enum/Role.enum';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Auth([RoleEnum.ADMIN])
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Query('type') type: string,
  ) {
    return this.filesService.create(file, type);
  }

  @Auth([RoleEnum.ADMIN])
  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Auth([RoleEnum.ADMIN])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(id);
  }
}
