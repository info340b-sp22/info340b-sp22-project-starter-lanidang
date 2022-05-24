import React from 'react';

const CardsContext = React.createContext();

export const useCards = () => {
  return React.useContext(CardsContext);
}


export const GlobalContextWrapper = ({ children }) => {
  return (
    <CardsContext.Provider>
      {children}
    </CardsContext.Provider>
  )
}