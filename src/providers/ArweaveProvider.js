import React, { createContext, useEffect, useState } from 'react'
import Arweave from 'arweave';

const ArweaveContext = createContext()


export const ArweaveProvider = ({children}) => {

    const [arweave, setArweave] = useState(null)

    
    useEffect(() => {
        const arweaveInstance = Arweave.init(
            {
                host: 'arweave.net',// Hostname or IP address for a Arweave host
                port: 443,          // Port
                protocol: 'https',  // Network protocol http or https
                timeout: 20000,     // Network request timeouts in milliseconds
                logging: false,     // Enable network request logging
            });
            setArweave(arweaveInstance)        
      }, [])

    return (
        <ArweaveContext.Provider value={arweave}>
            { children }
        </ArweaveContext.Provider>
    )
}


export default ArweaveContext;