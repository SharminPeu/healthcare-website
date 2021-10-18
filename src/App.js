import logo from './logo.svg';
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
  // import Home from './components/Home/Home';
  // import About from './components/About/About';
  // import Courses from './components/Courses/Courses';
  
  // import Contact from './components/Contact/Contact';
  
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
            {/* <Route path="/about">
              <About></About>
            </Route> */}
            {/* <Route path="/courses">
            <Courses></Courses>
            </Route> */}
            {/* <Route path="/contact">
            <Contact></Contact>
            </Route> */}
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
