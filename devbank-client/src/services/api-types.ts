export type CreateUser = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export type User = {
  _id?: string;
  email: string;
  password: string;
  token?: string;
};

export type Balance = {
  name: string;
  email: string;
  balance: number;
};
