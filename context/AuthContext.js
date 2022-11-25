import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [initialLoading, setInitialLoading] = useState(false);

  const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);
  
  //Register user
  //=======================================
  const register = async ({ fullname, username, password }) => {
    setIsLoading(true);
    console.log(fullname, username, password);
    const res = await fetch(`${NEXT_URL}/api/register`, {
      methode: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fullname, username, password}),
    });

    const resData = await res.json();

    if (res.ok) {
      setUser(resData.user)
      router.push('/initialization');
    }else {
      setIsLoading(false);
      setError(resData.message);
      setError(null);
    }
  }

  // Login user
  // =====================================
  const login = async ({ username, password }) => {
    setIsLoading(true);
    console.log(username, password);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password}),
    });
console.log(res);
    const data = await res.json();
console.log(data.message);
    if (res.ok && res.status == 200) {
      setUser(data);
      router.push('/initialization/');

    } else {
      
      setError(data.message);
      setError(null);
    }
    setIsLoading(false);
  };

  // Check if user is logged in
  // ================================================
  const checkUserLoggedIn = async () => {
    console.log('User is checked');
    setInitialLoading(true);

    const res = await fetch('/api/user');
    const data = await res.json();

    if(res.ok) {
      setUser(data.user.data.user);
    } else {
      setUser(null);
    }
  };

  // Logout user
  // =====================================
  const logout = async () => {
    console.log('User is logged out');

    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })
      if (res.ok) {
        setUser(null);
        router.push('/');
      }
  };

  return (
    <AuthContext.Provider value={{ register, user, error, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
