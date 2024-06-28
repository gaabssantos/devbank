type UserProps = {
  _id?: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  balance: number;
  activities: object[];
};

export class UserEntity {
  public _id?: string;
  public name: string;
  public lastName: string;
  public email: string;
  public password: string;
  public balance: number;
  public activities: object[];

  constructor({
    _id,
    name,
    lastName,
    email,
    password,
    balance,
    activities,
  }: UserProps) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.balance = balance;
    this.activities = activities;
  }
}
