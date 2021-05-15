import './App.css';
import Header from './Header'
import Home from './Home';
import Store from './Store'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import {BrowserRouter,Redirect,Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Store>
        <BrowserRouter> 
          {/* <Switch> */}           
            <Route exact path="/" component={Header}/>
            <Route exact path="/" component={Home}/>    
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            
                
          {/* </Switch>   */}
        </BrowserRouter>
      </Store>
      
    </div>
    
  );  
}
export default App;
