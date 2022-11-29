import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  // const [initialLoading, setInitialLoading] = useState(false);

  const router = useRouter();

  // useEffect(() => getAllUsers(), []);
  
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

    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password}),
    });

    const data = await res.json();
// console.log(res.status);
    if (res.ok) {
      setUser(data);
      router.push('/');

    } else {
// console.log(data.message);      
      setError(data.message);
      // setError(null);
    }
    setIsLoading(false);
  };
  
  //Display all users
//===================================================
const getAllUsers = async () => {
  setIsLoading(true);

  const res = await fetch(`${NEXT_URL}/api/users`);
  const data = await res.json();
// console.log(data);
  if (res.ok) {
    setUser(data);
  }else {
    setError(data.message);
    setUser(null);
  }

  setIsLoading(false);
}

  // Check if user is logged in
  // ================================================
  // const checkUserLoggedIn = async () => {
  //   // console.log('User is checked');
  //   setIsLoading(true);

  //   const res = await fetch(`${NEXT_URL}/api/user`);
  //   const data = await res.json();

  //   if(res.ok) {
  //     setUser(data.username);
  //     console.log(data);
  //     console.log('User is checked');
  //   } else {
  //     setUser(null);
  //   }
  //   setIsLoading(false);
  // };

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
    <AuthContext.Provider value={{ register, user, error, isLoading, login, getAllUsers, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
