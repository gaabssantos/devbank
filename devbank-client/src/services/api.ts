import axios from 'axios';

import { CreateUser, User } from './api-types';

export class APIService {
  private static client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  static async createUser(createUserData: CreateUser): Promise<User> {
    const { data } = await APIService.client.post<User>(
      '/users',
      createUserData,
    );

    return data;
  }

  static async sessionUser(user: User): Promise<User> {
    const { data } = await APIService.client.post<User>('/users/session', user);

    return data;
  }
}
