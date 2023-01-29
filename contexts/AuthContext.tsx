import * as React from 'react';
import {authKey} from '../constants';
import {persistData, getPersistedData} from '../helpers';

interface ContextOptions {
  token: string | null;
  isLoading: boolean;
}

const AuthContext = React.createContext<ContextOptions | null>(null);

const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const {useState} = React;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    getPersistedData(authKey)
      .then(data => {
        if (data) setToken(data);
      })
      .catch(err => console.error(err));
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{token, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext: () => ContextOptions = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('Context can only be used with a provider');
  return context;
};
