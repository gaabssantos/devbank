import axios from 'axios';

import { Balance, CreateUser, Transfer, User } from './api-types';

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

  static async createTransfer(createTransferData: Transfer): Promise<Transfer> {
    const { data } = await APIService.client.post<Transfer>(
      '/transfers',
      createTransferData,
    );

    return data;
  }

  static async sessionUser(user: User): Promise<User> {
    const { data } = await APIService.client.post<User>('/users/session', user);

    return data;
  }

  static async getBalance(): Promise<Balance> {
    this.client.interceptors.request.use(async (config) => {
      const userData = await JSON.parse(
        localStorage.getItem('devbank:userData') as string,
      );
      const token = userData && userData.token;
      config.headers.authorization = `Bearer ${token}`;

      return config;
    });

    const { data } = await APIService.client.get('/balance');

    return data;
  }
}
