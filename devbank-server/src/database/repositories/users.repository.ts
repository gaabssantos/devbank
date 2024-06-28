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
    activities,
  }: UserEntity): Promise<UserEntity> => {
    const userCreated = await this.userModel.create({
      name,
      lastName,
      email,
      password,
      balance,
      activities,
    });

    return userCreated.toObject<UserEntity>();
  };

  findByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const userFound = await this.userModel.findOne({ email });

    return userFound?.toObject<UserEntity>();
  };

  valueTransfer = async (emailFrom: string, email: string, value: number) => {
    const transferredUser = await this.findByEmail(email);
    const fromTransferredUser = await this.findByEmail(emailFrom);

    const valueUpdated = (transferredUser?.balance as number) + value;
    const valueFromUpdated = (fromTransferredUser?.balance as number) - value;

    const toUser = await this.userModel.findOneAndUpdate(
      { email },
      { balance: valueUpdated },
      { new: true },
    );

    const fromUser = await this.userModel.findOneAndUpdate(
      { email: emailFrom },
      { balance: valueFromUpdated },
      { new: true },
    );

    await this.userModel.findOneAndUpdate(
      { email: emailFrom },
      { $push: { activities: { email, value } } },
    );

    return toUser?.toObject<UserEntity>();
  };
}
