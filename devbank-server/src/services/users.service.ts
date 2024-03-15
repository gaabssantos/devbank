import { UsersRepository } from '../database/repositories/users.repository';
import { CreateUsersDTO } from '../dtos/users.dto';
import { User } from '../entities/users.entity';

export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  create = async ({ name, lastName, email, password }: CreateUsersDTO) => {
    const user = new User({
      name,
      lastName,
      email,
      password,
    });

    const createdUser = await this.usersRepository.create(user);

    return createdUser;
  };
}
