import { AccountsRepository } from '../database/repositories/accounts.repository';
import { CreateAccountDTO } from '../dtos/accounts.dto';
import { Account } from '../entities/accounts.entity';

export class AccountsService {
  constructor(private accountsRepository: AccountsRepository) {}

  create = async ({ accountNumber, balance }: CreateAccountDTO) => {
    const account = new Account({ accountNumber, balance });

    const createdAccount = await this.accountsRepository.create(account);

    return createdAccount;
  };
}
