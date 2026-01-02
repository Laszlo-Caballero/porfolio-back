import { Module } from '@nestjs/common';
import { TecnologieService } from './tecnologie.service';
import { TecnologieController } from './tecnologie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tecnologie, TecnologieSchema } from './entities/tecnologie.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tecnologie.name,
        schema: TecnologieSchema,
      },
    ]),
  ],
  controllers: [TecnologieController],
  providers: [TecnologieService],
})
export class TecnologieModule {}
