import React, { createContext, useState } from "react";

const ContextCommon = createContext({});

const ProviderCommon = ({ children }) => {
  const [loged, setLoged] = useState(false);
  const [clientList, setClientList] = useState([]);
  const [userList, setUserList] = useState([]);

  return (
    <ContextCommon.Provider
      value={{
        loged,
        setLoged,
        clientList,
        setClientList,
        userList,
        setUserList,
      }}
    >
      {children}
    </ContextCommon.Provider>
  );
};

export { ContextCommon, ProviderCommon };
