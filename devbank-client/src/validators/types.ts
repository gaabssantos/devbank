import { z } from 'zod';

import { createUserSchema } from './schemas';

export type CreateUserData = z.infer<typeof createUserSchema>;
