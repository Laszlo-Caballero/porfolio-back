import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'tecnologies',
})
export class Tecnologie {
  @Prop()
  urlImage: string;

  @Prop()
  altImage: string;

  @Prop({ default: true })
  status: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TecnologieSchema = SchemaFactory.createForClass(Tecnologie);
