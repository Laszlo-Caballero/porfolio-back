import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'files',
})
export class FileEntity {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  type: string;
}

export const FileSchema = SchemaFactory.createForClass(FileEntity);
