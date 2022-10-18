import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL, API_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [initialLoading, setInitialLoading] = useState(false);

  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);
  
  //Register user
  //=======================================
  const register = async ({ fullname, email, password }) => {
    setIsLoading(true);
    console.log(fullname, email, password);
    const res = await fetch(`${NEXT_URL}/api/register`, {
      methode: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fullname, email, password}),
    });

    const resData = await res.json();

    if (res.ok) {
      setUser(resData.user)
      router.push('/dashboard');
    }else {
      setIsLoading(false);
      setIsError(resData.message);
      setIsError(null);
    }
  }

  // Login user
  // =====================================
  const login = async ({ email, password }) => {
    setIsLoading(true);
    console.log(email, password);
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password}),
    });
console.log(res);
    const data = await res.json();

    if (res.ok) {
      setUser(data);
      router.push('/dashboard/');
    } else {
      setIsLoading(false);
      setIsError(data.message);
      setIsError(null);
    }
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
    <AuthContext.Provider value={{ register, user, isError, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
