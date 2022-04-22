import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/containers/Header";
import Main from "./components/containers/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ExempleHooks from "./pages/ExempleHooks";
import ExempleAxios from "./pages/ExempleAxios";

const App = () => {
    // traite
  return (
      <Router>
        <div className="app">
            <Header />
            <Main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/hooks">
                        <ExempleHooks />
                    </Route>
                    <Route path="/axios">
                        <ExempleAxios />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Main>
            <footer style={{textAlign: 'center'}}>Formation Janvier 2022 - REACT</footer>
        </div>
      </Router>
  )
}

export default App;
