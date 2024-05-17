import { UserRepository } from '../database/repositories/users.repository';
import { UserDTO } from '../dtos/users.dto';
import { UserEntity } from '../entities/users.entity';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  create = async ({ name, lastName, email, password, balance }: UserDTO) => {
    const user = new UserEntity({ name, lastName, email, password, balance });

    const userCreated = await this.userRepository.create(user);

    return userCreated;
  };

  findByEmail = async (email: string) => {
    const userFound = await this.userRepository.findByEmail(email);

    return userFound;
  };
}
