import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  _id: false,
})
export class KeyValue {
  @Prop()
  key: string;

  @Prop()
  value: string;
}

export const KeyValueSchema = SchemaFactory.createForClass(KeyValue);

@Schema({
  _id: false,
})
export class Arquitecture {
  @Prop()
  title: string;

  @Prop({
    type: [String],
    default: [],
  })
  badges: string[];

  @Prop({
    type: [KeyValueSchema],
    default: [],
  })
  detail: KeyValue[];

  @Prop({
    default: 1,
  })
  colSpan: number;
}

export const ArquitectureSchema = SchemaFactory.createForClass(Arquitecture);
