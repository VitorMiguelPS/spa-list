import React, { createContext, useState } from "react";

const ContextCommon = createContext({});

const ProviderCommon = ({ children }) => {
  const [loged, setLoged] = useState(false);

  return (
    <ContextCommon.Provider value={{ loged, setLoged }}>
      {children}
    </ContextCommon.Provider>
  );
};

export { ContextCommon, ProviderCommon };
