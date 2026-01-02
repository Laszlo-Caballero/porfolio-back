import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tecnologie } from 'src/modules/tecnologie/entities/tecnologie.entity';

@Injectable()
export class TecnologiesService {
  constructor(
    @InjectModel(Tecnologie.name) private tecnologieModel: Model<Tecnologie>,
  ) {}

  getAll() {
    return this.tecnologieModel
      .find({
        status: true,
      })
      .sort({ createdAt: -1 })
      .exec();
  }
}
