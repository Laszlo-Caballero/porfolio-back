import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  _id: false,
})
export class Detail {
  @Prop()
  role: string;

  @Prop()
  time: string;

  @Prop({
    required: false,
  })
  team?: string;

  @Prop()
  status: string;
}

export const DetailSchema = SchemaFactory.createForClass(Detail);
