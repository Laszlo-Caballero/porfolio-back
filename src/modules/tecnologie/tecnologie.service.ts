import { Injectable } from '@nestjs/common';
import { CreateTecnologieDto } from './dto/create-tecnologie.dto';
import { InsertManyTecnologieDto } from './dto/InsertMany.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tecnologie } from './entities/tecnologie.entity';
import { Model } from 'mongoose';

@Injectable()
export class TecnologieService {
  constructor(
    @InjectModel(Tecnologie.name) private tecnologieModel: Model<Tecnologie>,
  ) {}

  async create(createTecnologieDto: CreateTecnologieDto) {
    const newTecnologie = await this.tecnologieModel.create({
      ...createTecnologieDto,
    });

    return newTecnologie;
  }

  async insertMany(insertManyTecnologieDto: InsertManyTecnologieDto) {
    const createdTecnologies = await this.tecnologieModel.insertMany(
      insertManyTecnologieDto.tecnologies,
    );

    return createdTecnologies;
  }

  findAll() {
    return this.tecnologieModel.find().exec();
  }

  migrate() {
    return this.tecnologieModel
      .updateMany({}, { $set: { status: true, createdAt: new Date() } })
      .exec();
  }
}
