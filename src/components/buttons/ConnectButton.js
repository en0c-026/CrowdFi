import { Box, Button, Spinner } from 'grommet'
import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../../features/mainSlice'
import ArConnectContext from '../../providers/ArConnectProvider'


export const ConnectButton = () => {
    const arconnect = useContext(ArConnectContext)
    const address = useSelector(state => state.main.address)
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()


    return (
        <Box  >
            
            { !address ? (
                <Button size='small' label={loading ? (<Spinner size='xsmall'/>) : 'Connect'} onClick={() => {
                    setLoading(true)
                    arconnect.connect(['ACCESS_ADDRESS', 'ACCESS_ALL_ADDRESSES', 'SIGN_TRANSACTION']).then(() => {
                        arconnect.getActiveAddress().then((address) => {
                            dispatch(setAddress(address))
                            setLoading(false)
                        })
                    }).catch((params) => {
                        console.log(params)
                        setLoading(false)
                    })
                }} />
            ) : (
                <Button size='small' label='Disconnect' onClick={() => {
                    arconnect.disconnect()
                    dispatch(setAddress(null))
                }} />
            )
            }
        </Box>
    )
}
