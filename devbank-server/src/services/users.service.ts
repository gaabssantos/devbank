import { CreateUsersDTO } from '../dtos/users.dto';
import { User } from '../entities/users.entity';

export class UsersService {
  create = async ({ name, lastName, email, password }: CreateUsersDTO) => {
    const user = new User({
      name,
      lastName,
      email,
      password,
    });

    return user;
  };
}
