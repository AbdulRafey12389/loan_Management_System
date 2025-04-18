// NODE MODULES...
import { createContext, useEffect, useState, useContext } from 'react';

// CUSTOM MODULES...
import supabase from '@/services/supabaseConfig';

const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => setUser(data?.session?.user || null));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
