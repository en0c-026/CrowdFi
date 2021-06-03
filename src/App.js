import { Grommet, Box, Grid, Text } from 'grommet';
import { AppRouter } from './routers/AppRouter';
import { hpe } from 'grommet-theme-hpe';

const App = () => {
  return (
    <Grommet theme={hpe}  themeMode="dark" full>
      <Grid
        rows={['xxsmall', 'flex', 'xxsmall']}
        columns={['1/1']}
        areas={[
          ['header', 'header'],
          ['main', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
        fill
      >
        <Box background="green" gridArea="header" justify="center" pad="small">
          <Text weight="bold">Header</Text>
        </Box>

        <Box background="background" gridArea="main" pad="small">
          <AppRouter />
        </Box>

        <Box background="green" gridArea="footer" justify="center" pad="small">
          <Text weight="bold">Footer</Text>
        </Box>
      </Grid>
    </Grommet>
  )
}
export default App