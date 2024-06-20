import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedin: false,
  token: '',
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  // Initialize token from local storage
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const isLoggedin = !!token;

  const usrLoggedIn = (token) => {
    setToken(token);
    console.log("Loggedin Token", token);
    localStorage.setItem('token', token);
  };

  const usrLoggedOut = () => {
    setToken(null);
    console.log("Logged out");
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedin: isLoggedin,
    Loggedin: usrLoggedIn,
    Loggedout: usrLoggedOut,
  };

  console.log('contextValue', contextValue);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
