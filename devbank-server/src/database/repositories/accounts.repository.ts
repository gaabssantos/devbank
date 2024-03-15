import { Account } from '../../entities/accounts.entity';
import { AccountsModel } from '../schemas/accounts.schema';

export class AccountsRepository {
  constructor(private model: typeof AccountsModel) {}

  create = async ({ accountNumber, balance }: Account): Promise<Account> => {
    const createdAccount = await this.model.create({ accountNumber, balance });

    return createdAccount.toObject<Account>();
  };
}
