import { ReactNode, createContext, useCallback, useContext } from 'react';

import { APIService } from '../services/api';
import { Balance } from '../services/api-types';
import { CreateUserData, SessionUserData } from '../validators/types';

interface FetchAPIProps {
  createUser: (data: CreateUserData) => Promise<void>;
  sessionUser: (data: SessionUserData) => Promise<void>;
  getBalance: () => Promise<Balance>;
  isUserLogged: () => boolean;
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps);

type FetchAPIProviderProps = {
  children: ReactNode;
};

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
  const createUser = useCallback(async (data: CreateUserData) => {
    await APIService.createUser({
      ...data,
    });
  }, []);

  const sessionUser = useCallback(async (data: SessionUserData) => {
    const userData = await APIService.sessionUser({
      ...data,
    });

    const userObj = {
      email: userData.email,
      token: userData.token,
    };

    localStorage.setItem('devbank:userData', JSON.stringify(userObj));
  }, []);

  const getBalance = useCallback(async () => {
    const user = await APIService.getBalance();

    return user;
  }, []);

  const isUserLogged = useCallback(() => {
    if (localStorage.getItem('devbank:userData')) {
      return true;
    }

    return false;
  }, []);

  return (
    <FetchAPIContext.Provider
      value={{ createUser, sessionUser, getBalance, isUserLogged }}
    >
      {children}
    </FetchAPIContext.Provider>
  );
}

export function useFetchAPI(): FetchAPIProps {
  return useContext(FetchAPIContext);
}
