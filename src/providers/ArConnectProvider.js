import React, { createContext, useEffect, useState } from 'react'

const ArConnectContext = createContext()


export const ArConnectProvider = ({children}) => {

    const [arConnect, setArConnect] = useState(null)


    useEffect(() => {
        const handleE = () => {
          setArConnect(window.arweaveWallet)
        }
    
        window.addEventListener('arweaveWalletLoaded', handleE)
        return () => {
          window.removeEventListener('arweaveWalletLoaded', handleE)
        }
      }, [])
    return (
        <ArConnectContext.Provider value={arConnect}>
            { children }
        </ArConnectContext.Provider>
    )
}


export default ArConnectContext;