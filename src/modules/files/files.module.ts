import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { CloudinaryProvider } from 'src/common/cloudinary/cloudinary.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { FileEntity, FileSchema } from './entities/file.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FileEntity.name,
        schema: FileSchema,
      },
    ]),
  ],
  controllers: [FilesController],
  providers: [FilesService, CloudinaryProvider],
})
export class FilesModule {}
