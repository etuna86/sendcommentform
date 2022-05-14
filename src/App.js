import React,{Component,FC,Suspense}  from 'react';
import { Router,Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
let customHistory = createBrowserHistory();
import Home from './pages/home';
import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import ContactUs from './pages/contactUs';


class App extends Component {
  constructor(props){
    super(props);

}

  render(){
    return (  
      <Suspense fallback={null}>
          <Router history={customHistory}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route  path="/pageone">
                <PageOne />
              </Route>
              <Route  path="/pagetwo">
                <PageTwo />
              </Route>
              <Route  path="/contactus">
                <ContactUs />
              </Route>
            </Switch>
          </Router>
          </Suspense>
  
    );
  }
}

export default App;
