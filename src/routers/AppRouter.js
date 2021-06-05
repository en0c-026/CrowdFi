import { Box } from "grommet"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { About } from "../components/pages/About"
import { Contact } from "../components/pages/Contact"
import { Home } from "../components/pages/Home"
import { MyCoffee } from "../components/pages/MyCoffee"
import { NotFound } from "../components/pages/NotFound"

export const AppRouter = () => {
    return (
        <Box gridArea="main" pad="small">
            <Router>
                <Switch>
                    <Route exact path='/buyMeaCoffee' component={MyCoffee} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/' component={Home} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </Box>
    )
}
