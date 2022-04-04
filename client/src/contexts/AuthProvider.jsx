// NPM Package
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

// Project files
import { authInstance } from '../auth/firebase';

// Properties
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Local state
  const [isLogged, setIsLogged] = useState(false);
  const [auth, setAuth] = useState('');
  const [user, setUser] = useState({});

  // Methods
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, user => {
      if (user) {
        setAuth(user.uid);
        setUser(user);
      } else {
        console.log('AuthProvider user signed out');
      }
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLogged, setIsLogged, auth, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
