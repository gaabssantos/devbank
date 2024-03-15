import { User } from '../../entities/users.entity';
import { UsersModel } from '../schemas/users.schema';

export class UsersRepository {
  constructor(private model: typeof UsersModel) {}

  create = async ({ name, lastName, email, password }: User): Promise<User> => {
    const createdUser = await this.model.create({
      name,
      lastName,
      email,
      password,
    });

    return createdUser.toObject<User>();
  };
}
