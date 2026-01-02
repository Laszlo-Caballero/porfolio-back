import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  _id: false,
})
export class ImageProject {
  @Prop()
  url: string;

  @Prop()
  alt: string;

  @Prop({
    default: 1,
  })
  colSpan: number;

  @Prop({
    default: 1,
  })
  rowSpan: number;
}

export const ImageProjectSchema = SchemaFactory.createForClass(ImageProject);
