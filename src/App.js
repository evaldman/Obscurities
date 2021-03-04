import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import Homepage from "./Homepage"
import Hobbies from "./Hobbies"

function App() {
  return (
    <div>
     <Header />
     <Header />
    
     <Switch>
     <Route exact path="/">
        <Homepage/>
        </Route>
        <Route exact path="/hobbies">
          <Hobbies />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
