import React, { createContext, useEffect } from 'react'

export const PokeContext = createContext()

const PokeProvider = ({ children }) => {
  const globalState = {

  }
  return (
    <PokeContext.Provider value={globalState}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider
