import uniqueValidator from 'mongoose-unique-validator';
import { createSchema, Type, typedModel } from 'ts-mongoose';

const User = createSchema(
  {
    name: Type.string({ required: true, unique: true, trim: true }),
    id: Type.string({ required: true, unique: true }),
    password: Type.string({ required: true }),
  },
  {
    versionKey: false,
    timestamps: true,
    id: false,
  },
);
User.plugin(uniqueValidator);

export default typedModel('User', User);
