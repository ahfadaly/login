import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import Login from './Components/Login';
import Singup from './Components/Singup';
import Forgot from './Components/Forgot';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Route exact path='/' component={Login} />
            <Route path='/Singup' component={Singup} />
            <Route path='/Forgot' component={Forgot} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;