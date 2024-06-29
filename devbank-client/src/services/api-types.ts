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
  activities: [
    {
      id: string;
      name: string;
      value: number;
    },
  ];
};

export type Transfer = {
  email: string;
  value: number;
};
