import { z } from 'zod';

import { createUserSchema, sessionUserSchema, transferSchema } from './schemas';

export type CreateUserData = z.infer<typeof createUserSchema>;

export type SessionUserData = z.infer<typeof sessionUserSchema>;

export type TransferData = z.infer<typeof transferSchema>;
