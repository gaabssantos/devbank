type UserProps = {
  _id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  balance: number;
};

export class UserEntity {
  public _id?: string;
  public name: string;
  public lastName: string;
  public email: string;
  public password: string;
  public balance: number;

  constructor({ _id, name, lastName, email, password, balance }: UserProps) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.balance = balance;
  }
}
