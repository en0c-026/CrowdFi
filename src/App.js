import { Grommet, Grid } from 'grommet';
import { AppRouter } from './routers/AppRouter';
import { useContext, useEffect } from 'react'
import ArConnectContext from './providers/ArConnectProvider';
import { setAddress } from './features/mainSlice';
import { useDispatch } from 'react-redux';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
// import ArweaveContext from './providers/ArweaveProvider';

const atheme = {
  global: {
    focus: {
      outline: {
        size: '0px'
      },
    },
    colors: {
      text: { dark: 'background3', ligth: 'background'},
      background: '#292831',
      background2: '#333f58',
      background3: '#fae8bc',
      front1: '#ee8695',
      front2: '#4a7a96',
      front3: '#fbbbad',
      white: '#ffffff'
    },
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto, 
         Oxygen, 
         Ubuntu, 
         Cantarell, 
         "Fira Sans", 
         "Droid Sans",  
         "Helvetica Neue", 
         Arial, sans-serif,  
         "Apple Color Emoji", 
         "Segoe UI Emoji", 
         "Segoe UI Symbol"`,
    },
  },
  spinner: {
    size: {
      xsmall: "8px",
    },
  },
  button: {
    hover: {
      background: {
        color: '#f9b18e',
        opacity: '100'
      },
    },
    default: {
      padding: {
        horizontal: 'small',
        vertical: 'xsmall'
      },
      background: {
        color: 'front3',
        opacity: '100'
      },
      font: {
        weight: 'bold',
      },
    },
    primary: {
      background: {
        color: 'accent-2',
        opacity: '100'
      },
      font: {
        weight: 'bold',
      },
    },
    secondary: {
      background: {
        color: 'accent-3',
        opacity: '100'
      },
    },
  },
  menu: {
    icons: {
      color: 'background'
    },
    background: 'background3',
  }
}

const App = () => {

  const arconnect = useContext(ArConnectContext)
  // const arweave = useContext(ArweaveContext)
  const dispatch = useDispatch()
  useEffect(() => {

    if (arconnect) {

      arconnect.getPermissions().then((result) => {

        if (result.length > 0) {
          arconnect.getActiveAddress().then((address) => {
            dispatch(setAddress(address))
          })
        }
      })
    }

  }, [arconnect, dispatch])


  return (
    <Grommet theme={atheme} full>
      <Grid
        rows={['auto', 'flex', 'xxsmall']}
        columns={['1/1']}
        areas={[
          ['header', 'header'],
          ['main', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
        fill
      >
        <Navbar />
        <AppRouter />
        <Footer />
      </Grid>
    </Grommet>
  )
}
export default App