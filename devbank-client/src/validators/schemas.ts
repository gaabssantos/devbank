import { z } from 'zod';

export const createUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'O nome é preciso ter, pelo menos, 2 caracteres.' }),
  lastName: z.string().trim().min(1, {
    message: 'O sobrenome é preciso ter, pelo menos, 2 caracteres.',
  }),
  email: z.string().email({ message: 'Este e-mail está inválido.' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
});

export const sessionUserSchema = z.object({
  email: z.string().email({ message: 'Este e-mail está inválido.' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'A senha é preciso ter, pelo menos, 8 caracteres' }),
});

export const transferSchema = z.object({
  email: z.string().email({ message: 'Este e-mail está inválido.' }),
  value: z
    .string()
    .min(1, { message: 'Deve conter pelo menos 1 dígito' })
    .max(255),
});
