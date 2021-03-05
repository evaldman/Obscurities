import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import Homepage from "./Homepage"
import Hobbies from "./Hobbies"
import Posts from './Posts'

function App() {
  return (
    <div>
     <Header />
    
    
     <Switch>
     <Route exact path="/">
        <Homepage/>
        </Route>
        <Route exact path="/hobbies">
          <Hobbies />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
