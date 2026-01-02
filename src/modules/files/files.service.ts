import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileEntity } from './entities/file.entity';
import { Model } from 'mongoose';
import { CloudinaryResponse } from 'src/common/cloudinary/cloudinary-response';
import { v2 as cloudinary, DeleteApiResponse } from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel(FileEntity.name) private fileModel: Model<FileEntity>,
  ) {}

  async findAll() {
    const files = await this.fileModel.find();
    return files;
  }

  async create(file: Express.Multer.File, type: string) {
    try {
      const res = await new Promise<CloudinaryResponse>((res, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          (error: unknown, result: unknown) => {
            if (error) {
              return reject(new Error(String(error)));
            }
            if (!result) {
              return reject(new Error('Upload failed'));
            }
            res(result as CloudinaryResponse);
          },
        );

        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });

      const newImage = await this.fileModel.create({
        name: res.public_id,
        url: res.url,
        type: type || 'image',
      });

      const savedImage = await newImage.save();

      return savedImage;
    } catch {
      throw new HttpException(
        'Error uploading file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      const findImage = await this.fileModel.findOne({ name: id });
      if (!findImage) {
        throw new HttpException('Image not found', HttpStatus.NOT_FOUND);
      }

      await this.fileModel.deleteOne({
        name: id,
      });

      const res = await new Promise<DeleteApiResponse>((res, reject) => {
        cloudinary.uploader.destroy(id, (error: unknown, result: unknown) => {
          if (error) {
            return reject(new Error(String(error)));
          }
          if (!result) {
            return reject(new Error('Delete failed'));
          }
          res(result as DeleteApiResponse);
        });
      });

      return res;
    } catch {
      throw new HttpException(
        'Error deleting file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
