import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/explore-screen";
import HomeScreen from "./components/tuiter/HomeScreen/home-screen";
import {BrowserRouter, Route, Routes}
       from "react-router-dom";
import "./components/tuiter/ExploreScreen/explore.css";



function App() {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/hello"
                exact={true}
                element={<HelloWorld/>}/>
         {["/", "/labs"].map(path => (
         <Route path={path}
                exact={true}
                element={<Labs/>}/>
         ))}
         <Route path="/tuiter"
                exact={true}
                element={<Tuiter/>}/>
         <Route path="/tuiter/home"
                element={<HomeScreen/>}/>
         <Route path="/tuiter/explore"
         element={<ExploreScreen/>}/>
       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;
