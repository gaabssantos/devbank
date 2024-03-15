import { Account } from '../entities/accounts.entity';

export class AccountsService {
  create = async (accountNumber: number, balance: number) => {
    const account = new Account({ accountNumber, balance });

    return account;
  };
}
