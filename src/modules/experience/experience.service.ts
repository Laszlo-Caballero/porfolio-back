import { HttpException, Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from './entities/experience.entity';
import { Model } from 'mongoose';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name) private experienceModel: Model<Experience>,
  ) {}

  async create(createExperienceDto: CreateExperienceDto) {
    const newExperience =
      await this.experienceModel.create(createExperienceDto);

    return newExperience.save();
  }

  findAll() {
    return this.experienceModel.find().exec();
  }

  async findOne(id: string) {
    const findedExperience = await this.experienceModel
      .findOne({
        experienceId: id,
      })
      .exec();

    if (!findedExperience) {
      throw new HttpException(`Experience with id ${id} not found`, 404);
    }

    return findedExperience;
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto) {
    const findedExperience = await this.experienceModel
      .findOne({
        experienceId: id,
      })
      .exec();

    if (!findedExperience) {
      throw new HttpException(`Experience with id ${id} not found`, 404);
    }

    await this.experienceModel.updateOne(
      { experienceId: id },
      { $set: updateExperienceDto },
    );

    return this.experienceModel.findOne({ experienceId: id }).exec();
  }

  async remove(id: string) {
    const findedExperience = await this.experienceModel
      .findOne({
        experienceId: id,
      })
      .exec();

    if (!findedExperience) {
      throw new HttpException(`Experience with id ${id} not found`, 404);
    }

    await this.experienceModel.updateOne(
      {
        experienceId: id,
      },
      {
        $set: {
          status: false,
        },
      },
    );

    return this.experienceModel.findOne({ experienceId: id }).exec();
  }
}
