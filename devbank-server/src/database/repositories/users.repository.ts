import { UserEntity } from '../../entities/users.entity';
import { UserModel } from '../models/users.model';

export class UserRepository {
  constructor(private userModel: typeof UserModel) {}

  create = async ({
    name,
    lastName,
    email,
    password,
    balance,
  }: UserEntity): Promise<UserEntity> => {
    const userCreated = await this.userModel.create({
      name,
      lastName,
      email,
      password,
      balance,
    });

    return userCreated.toObject<UserEntity>();
  };

  findByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const userFound = await this.userModel.findOne({ email });

    return userFound?.toObject<UserEntity>();
  };

  valueTransfer = async (email: string, value: number) => {
    const userOld = await this.findByEmail(email);

    const valueUpdated = (userOld?.balance as number) + value;

    const user = await this.userModel.findOneAndUpdate(
      { email },
      { balance: valueUpdated },
      { new: true },
    );

    return user?.toObject<UserEntity>();
  };
}
