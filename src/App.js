import React from 'react';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterForm from './Components/Register/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import GMap from './Components/Map/GMap';
// import DatetimePage from  './Components/DateTimePage/datetimepage';
import Donate from './Components/Donate/Donate';
import Profile from './Components/Profile/Profile';
import "./index.css";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/map" component={GMap} />
            {/* <Route exact path="/datetimepage" component={DatetimePage}/> */}
            <Route path="/donate" component={Donate}/>
            <Route Path="/profile" component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
