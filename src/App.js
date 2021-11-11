import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Footer from "./components/SharedComponents/Footer";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AboutUs from "./components/AboutUs/AboutUs";
import ExploreVehicles from "./components/ExploreVehicles/ExploreVehicles";
import Navigation from "./components/SharedComponents/Navigation";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import initializeAuthentication from "./firebase/firebase.auth";
initializeAuthentication()


function App() {
  return (
    <div className="App">

      <AuthProvider>

      <Router>
 
 <Navigation></Navigation>

      <Switch>

        <Route exact path="/"> 
        <Home></Home>
        </Route>

        <Route path="/home"> 
<Home></Home>
        </Route>

        <PrivateRoute path="/login"> 
<Login></Login>
</PrivateRoute>

        <PrivateRoute  path="/register"> 
<Register></Register>
</PrivateRoute>

        <Route path="/aboutUs"> 
<AboutUs></AboutUs>
        </Route>

        <Route path="/exploreVehicles"> 
<ExploreVehicles></ExploreVehicles>
        </Route>


        <Route path="*"> 
<NotFound></NotFound>
        </Route>

      </Switch>
<Footer/>
    </Router>

      </AuthProvider>
   
    </div>
  );
}

export default App;
