import { UserRepository } from '../database/repositories/users.repository';
import { UserDTO } from '../dtos/users.dto';
import { UserEntity } from '../entities/users.entity';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  create = async ({
    name,
    lastName,
    email,
    password,
    balance,
    activities,
  }: UserDTO) => {
    const user = new UserEntity({
      name,
      lastName,
      email,
      password,
      balance,
      activities,
    });

    const userCreated = await this.userRepository.create(user);

    return userCreated;
  };

  findByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const userFound = await this.userRepository.findByEmail(email);

    return userFound;
  };

  valueTransfer = async (emailFrom: string, email: string, value: number) => {
    const user = await this.userRepository.valueTransfer(
      emailFrom,
      email,
      value,
    );

    return user;
  };
}
