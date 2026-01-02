import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';

@Schema({
  collection: 'experiences',
})
export class Experience {
  @Prop({
    default: uuid(),
  })
  experienceId: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  company: string;

  @Prop()
  urlImage: string;

  @Prop()
  time: string;

  @Prop({
    default: true,
  })
  status: boolean;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
