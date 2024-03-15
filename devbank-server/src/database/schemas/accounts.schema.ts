import mongoose, { Schema } from 'mongoose';

const AccountsSchema = new Schema(
  {
    accountNumber: Number,
    balance: Number,
  },
  {
    versionKey: false,
  },
);

export const AccountsModel = mongoose.model('Accounts', AccountsSchema);
