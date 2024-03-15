import { z } from 'zod';

export type CreateUsersDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export const createUserSchema = {
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
};
