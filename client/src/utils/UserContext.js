import React, { useState, useContext } from 'react';

export const UserContext = React.createContext();

export const useLogin = () => useContext(UserContext);

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    user: {}
  });

  const updateUser = (userData) => {
      return setCurrentUser({isLoggedIn: true, user: userData});
  };

  return (
    <UserContext.Provider value={{ currentUser, updateUser }} {...props} />
  );
};

export default UserProvider;