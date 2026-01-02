import { HttpException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './entities/project.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const createdProject = await this.projectModel.create({
      ...createProjectDto,
    });

    return createdProject.save();
  }

  findAll() {
    return this.projectModel.find().exec();
  }

  async findOne(id: string) {
    const project = await this.projectModel.findOne({ projectId: id }).exec();

    if (!project) {
      throw new HttpException('Project not found', 404);
    }

    return project;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.projectModel.findOne({ projectId: id }).exec();

    if (!project) {
      throw new HttpException('Project not found', 404);
    }

    await this.projectModel
      .updateOne({ projectId: id }, updateProjectDto)
      .exec();

    return this.projectModel.findOne({ projectId: id }).exec();
  }

  async remove(id: string) {
    const project = await this.projectModel.findOne({ projectId: id }).exec();

    if (!project) {
      throw new HttpException('Project not found', 404);
    }

    await this.projectModel
      .updateOne({ projectId: id }, { status: false })
      .exec();

    return this.projectModel.findOne({ projectId: id }).exec();
  }
}
