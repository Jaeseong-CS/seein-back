import {
  createSchema, Type, typedModel,
} from 'ts-mongoose';
import { mongoosePagination } from 'ts-mongoose-pagination';

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

Card.plugin(mongoosePagination);

export default typedModel('Card', Card);
