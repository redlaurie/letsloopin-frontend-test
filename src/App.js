import Home from './pages/home'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './assets/scss/base.scss';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/" render={() => <Redirect to="/home" />} />
                    <Route component={() => 404} />
                </Switch>
            </div>
        </Router>
    </div>
    </div>

  );
}

export default App;
