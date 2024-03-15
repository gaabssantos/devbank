type AccountProps = {
  accountNumber: number;
  balance: number;
};

export class Account {
  public accountNumber: number;
  public balance: number;

  constructor({ accountNumber, balance }: AccountProps) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
}
