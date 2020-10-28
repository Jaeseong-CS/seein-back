import { createSchema, Type, typedModel } from 'ts-mongoose';

const Card = createSchema(
  {
    title: Type.string({ required: true }),
    writer: Type.string({ required: true }),
    content: Type.string({ required: true }),
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export default typedModel('Card', Card);
