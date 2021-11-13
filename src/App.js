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
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import MyOrders from "./components/MyOrders/MyOrders";
import AddCars from "./components/AddCars/AddCars";
import DashBoard from "./components/DashBoard/DashBoard";




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

        <Route path="/login"> 
<Login></Login>
</Route>

        <Route  path="/register"> 
<Register></Register>
</Route>

        <Route  path="/confirmOrder/:carId"> 
<ConfirmOrder></ConfirmOrder>
</Route>

        <Route  path="/myOrders"> 
<MyOrders></MyOrders>
</Route>

        <Route path="/aboutUs"> 
<AboutUs></AboutUs>
        </Route>

        <Route path="/exploreVehicles"> 
<ExploreVehicles></ExploreVehicles>
        </Route>

        <Route path="/addCars"> 
<AddCars></AddCars>
        </Route>

        <Route path="/dashBoard"> 
<DashBoard></DashBoard>
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
