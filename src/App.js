import React,{Component}  from 'react';
import { Router,Switch, Route,withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();
import Login from './pages/login';
import Home from './pages/home';
import CountryCodes from './pages/countryCodes';
import ContactUs from './pages/contactUs';


class App extends Component {
  constructor(props){
    super(props);

}
  render(){
    return (  
          <Router history={customHistory}>
            <Switch>
            <Route exact path="/">
                <Login />
              </Route>
              <Route  path="/home">
                <Home />
              </Route>
              <Route  path="/countrycodes">
                <CountryCodes />
              </Route>
              <Route  path="/contactus">
                <ContactUs />
              </Route>
            </Switch>
          </Router>
  
    );
  }
}

export default App;
