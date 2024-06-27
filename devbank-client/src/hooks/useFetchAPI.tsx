import { ReactNode, createContext, useCallback, useContext } from 'react';

import { APIService } from '../services/api';
import { CreateUserData } from '../validators/types';

interface FetchAPIProps {
  createUser: (data: CreateUserData) => Promise<void>;
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

  return (
    <FetchAPIContext.Provider value={{ createUser }}>
      {children}
    </FetchAPIContext.Provider>
  );
}

export function useFetchAPI(): FetchAPIProps {
  return useContext(FetchAPIContext);
}
