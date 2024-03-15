import { User } from '../entities/users.entity';

export class UsersService {
  create = async (
    name: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    const user = new User({
      name,
      lastName,
      email,
      password,
    });

    return user;
  };
}
