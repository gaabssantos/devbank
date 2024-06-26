import { z } from 'zod';

export type UserDTO = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  balance: number;
};

export const userSchema = {
  name: z
    .string()
    .trim()
    .min(1, { message: 'The field need more than one character' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'The field need more than one character' }),
  email: z.string().email({ message: 'The field need to be a email' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'The field need more than eight character' }),
};
