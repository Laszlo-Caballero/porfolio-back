import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/modules/projects/entities/project.entity';

@Injectable()
export class ProyectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  getAll() {
    return this.projectModel
      .find({
        status: true,
      })
      .sort({ createdAt: -1 })
      .exec();
  }

  getOutstanding() {
    return this.projectModel
      .find({
        outStanding: true,
        status: true,
      })
      .sort({ createdAt: -1 })
      .limit(5)
      .exec();
  }

  async getBySlug(slug: string) {
    const project = await this.projectModel
      .findOne({
        slug,
        status: true,
      })
      .exec();

    if (!project) {
      throw new HttpException('Project not found', 404);
    }

    return project;
  }

  async migrate() {
    const updated = await this.projectModel.updateMany(
      {},
      {
        status: true,
        createdAt: new Date(),
      },
    );
    return updated;
  }
}
