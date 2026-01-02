import { Module } from '@nestjs/common';
import { TecnologiesService } from './tecnologies.service';
import { TecnologiesController } from './tecnologies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Tecnologie,
  TecnologieSchema,
} from 'src/modules/tecnologie/entities/tecnologie.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tecnologie.name,
        schema: TecnologieSchema,
      },
    ]),
  ],
  controllers: [TecnologiesController],
  providers: [TecnologiesService],
})
export class TecnologiesModule {}
