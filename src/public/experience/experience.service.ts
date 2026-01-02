import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experience } from 'src/modules/experience/entities/experience.entity';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name) private experienceModel: Model<Experience>,
  ) {}

  getAll() {
    return this.experienceModel
      .find({
        status: true,
      })
      .sort({ createdAt: -1 })
      .exec();
  }
}
