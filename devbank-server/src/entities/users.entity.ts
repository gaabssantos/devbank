type UserProps = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export class User {
  public name: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor({ name, lastName, email, password }: UserProps) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
