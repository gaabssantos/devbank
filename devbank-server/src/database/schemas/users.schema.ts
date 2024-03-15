import mongoose, { Schema } from 'mongoose';

const UsersSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
  },
  {
    versionKey: false,
  },
);

export const UsersModel = mongoose.model('Users', UsersSchema);
