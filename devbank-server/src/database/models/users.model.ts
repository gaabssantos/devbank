import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: String,
    lastName: String,
    email: String,
    password: String,
    balance: Number,
  },
  {
    versionKey: false,
  },
);

export const UserModel = mongoose.model('Users', UserSchema);
