import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { About } from "../components/pages/About"
import { Contact } from "../components/pages/Contact"
import { Home } from "../components/pages/Home"
import { NotFound } from "../components/pages/NotFound"

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    )
}
