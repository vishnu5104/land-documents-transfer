
import React, { useState, useEffect, Children, setState, useContext } from 'react';
import { NFTContext } from './NFTContext';

export const NFTUpdate = React.createContext();
export const NFTUpdateIt = ({ children }) => {
  let countIt = 0;

  countIt += 1;
  return (
    <NFTUpdate.Provider value={{ countIt }}>
      {children}
    </NFTUpdate.Provider>
  );
};

export default NFTUpdate;
