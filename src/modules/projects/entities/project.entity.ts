import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ImageProject, ImageProjectSchema } from './image/Image.schema';
import { Detail, DetailSchema } from './details/details.schema';
import {
  Arquitecture,
  ArquitectureSchema,
} from './arquitecture/arquitecture.schema';
import { randomUUID } from 'crypto';

@Schema({
  collection: 'proyects',
})
export class Project {
  @Prop({
    default: randomUUID(),
  })
  projectId: string;

  @Prop()
  title: string;

  @Prop()
  detail: string;

  @Prop()
  description: string;

  @Prop()
  slug: string;

  @Prop({
    type: [String],
  })
  keywords: string[];

  @Prop({
    type: Object,
  })
  urlImage: {
    url: string;
    alt: string;
  };

  @Prop()
  githubUrl: string;

  @Prop({
    required: false,
  })
  githubBackendUrl?: string;

  @Prop({
    required: false,
  })
  demoUrl?: string;

  @Prop({
    type: [ImageProjectSchema],
  })
  images: ImageProject[];

  @Prop({
    type: [String],
  })
  tecnologies: string[];

  @Prop({
    type: DetailSchema,
  })
  details: Detail;

  @Prop()
  resume: string;

  @Prop({
    type: [String],
  })
  objectives: string[];

  @Prop({
    type: [String],
  })
  learnings: string[];

  @Prop({
    default: false,
  })
  outStanding: boolean;

  @Prop({
    type: [ArquitectureSchema],
  })
  arquitecture: Arquitecture[];

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: true,
  })
  status: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
