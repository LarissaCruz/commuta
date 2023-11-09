import React, { createContext, useState, useContext } from 'react';

const PlanoContext = createContext();

export const PlanoProvider = ({ children }) => {
  const [planoAtivado, setPlanoAtivado] = useState(false);

  return (
    <PlanoContext.Provider value={{ planoAtivado, setPlanoAtivado }}>
      {children}
    </PlanoContext.Provider>
  );
};

export const usePlanoContext = () => {
  const context = useContext(PlanoContext);
  if (!context) {
    throw new Error('usePlanoContext deve ser usado dentro de um PlanoProvider');
  }
  return context;
};
