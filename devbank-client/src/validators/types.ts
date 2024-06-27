import { z } from 'zod';

import { createUserSchema, sessionUserSchema } from './schemas';

export type CreateUserData = z.infer<typeof createUserSchema>;

export type SessionUserData = z.infer<typeof sessionUserSchema>;
