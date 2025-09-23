import { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface AuthContextType {
  user: { email: string } | null;
  login: (userData: { email: string }) => void;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | null>(null);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
  
      localStorage.removeItem('user');
    }
  }, []);


  const login = (userData: { email: string }) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
