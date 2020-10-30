import React from 'react';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterForm from './Components/Register/RegisterForm';
import HomePage from './Components/HomePage/HomePage';
import GMap from './Components/Map/GMap';
import Donate from './Components/Donate/CreatePost/Donate';
import Profile from './Components/Profile/Profile';
import EditPostPage from './Components/Donate/EditPost/EditPostPage'
import "./index.css";
import DeletePost from './Components/Donate/DeletePost/DeletePost';
import OrderPage from './Components/Order/OrderPage'
import PlaceOrderForm from './Components/Order/PlaceOrder/PlaceOrderForm';

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
            <Route path="/donate" component={Donate}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/editpost" component={EditPostPage}/>
            <Route path="/deletepost/:id" component={DeletePost} />
            <Route path="/placeOrder/:id" component={PlaceOrderForm} />
            <Route path="/Order" component={OrderPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
