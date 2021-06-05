import { Box, Button, Text } from 'grommet'
import React from 'react'
import { ConnectButton } from '../buttons/ConnectButton'
import { MenuProducts } from './MenuProducts'

export const Navbar = () => {
  return (
    <Box background='background2' direction='row' gridArea="header" justify="around" align='center' pad='small'>
      <Button href='/'><Text size='xlarge' weight='bold' >CrowdFi</Text></Button>
      <MenuProducts />
      <ConnectButton />
    </Box>
  )
}
