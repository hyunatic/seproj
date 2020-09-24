import React from 'react';
import Nav from './Components/NavBar/Nav'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'
import Twitter from './Components/Twitter/Twitter';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
      <Nav />
      <br/>
      <Twitter />
    </div>
    </Provider>
  );
}

export default App;
