import { UserModel } from '../database/models/users.model';
import { UserRepository } from '../database/repositories/users.repository';
import { UserService } from '../services/users.service';

export class UserFactory {
  private static userService: UserService;

  static getServiceInstance() {
    if (this.userService) {
      return this.userService;
    }

    const repository = new UserRepository(UserModel);
    const service = new UserService(repository);

    this.userService = service;

    return service;
  }
}
