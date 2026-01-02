import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
@Schema({
  collection: 'experiences',
})
export class Experience {
  @Prop({
    default: randomUUID(),
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
