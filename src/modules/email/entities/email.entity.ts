import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'emails',
})
export class Email {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  message: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);
