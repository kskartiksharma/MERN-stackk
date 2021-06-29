import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { Footer } from "./components/Footer";
import  Loginpage  from "./components/Loginpage";
import  Signuppage  from "./components/Signuppage";
import { Navbar } from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import { MainPage } from "./components/MainPage";
import { Post } from "./components/Post";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <div>
        <Switch>
          <Route exact path="/Login">
          <Navbar/>
            <Loginpage />
            
            <Footer/>
          </Route>
          <Route exact path="/Signup">
          <Navbar/>
            <Signuppage />
            <Footer/>
          </Route>
          <Route exact path="/Aboutus">
          <Aboutus/>
          </Route>
          <Route exact path="/MainPage">
            <MainPage/>
        </Route>
        <Route exact path="/Post">
        <Post/>
    </Route>
          <Route exact path="/">
          <Navbar/>
            <Homepage />
            <Footer/>
          </Route>
        </Switch>
      </div>
      

    </Router>
    
  
  
  );
}

export default App;
