
import './App.css';
  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import MenuBar from './components/Shared/Menubar/Menubar';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Service from './components/Service/Service';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Appointment from './components/Appointment/Appointment';
import DoctorList from './components/DoctorList/DoctorList';


  
  // set routing
  function App() {
    return (
      <div className="App">
       <AuthProvider>
       <Router>
          <MenuBar></MenuBar>
          
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
              <Route path="/register">
                <Register></Register>
                </Route>
            <Route path="/doctors">
              <DoctorList></DoctorList>
            </Route>
            <PrivateRoute path="/services/:serviceId">
            <Service></Service>
      
            </PrivateRoute>
            <Route path="/appointment">
            <Appointment></Appointment>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
    
          </Switch>
          <Footer></Footer>
        </Router>
        
       </AuthProvider>
      </div>
    );
  }
  
  export default App;
