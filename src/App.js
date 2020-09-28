import React from 'react';
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'
import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegisterForm from './Components/Register/RegisterForm'
import HomePage from './Components/HomePage/HomePage';

function App() {
  const hello = () => {
    alert()
  }
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/home" component={HomePage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
