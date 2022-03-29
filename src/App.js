import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import EditProfile from "./components/tuiter/EditProfile";
import ExploreComponent from "./components/tuiter/ExploreScreen/explore-component";
import HomeScreen from "./components/tuiter/HomeScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen"
import {BrowserRouter, Route, Routes}
       from "react-router-dom";
import "./components/tuiter/ExploreScreen/explore.css";



function App() {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/">
           <Route path="labs"
                  element={<Labs/>}/>
           <Route path="hello"
                  element={<HelloWorld/>}/>
           <Route path="tuiter"
                  element={<Tuiter/>}>
             <Route index
                    element={<HomeScreen/>}/>
             <Route path="explore"
                    element={<ExploreComponent/>}/>
             <Route path="profile"
                    element={<ProfileScreen/>}/>
             <Route path="editprofile"
                    element={<EditProfile/>}/>
           </Route>
         </Route>
       </Routes>
     </div>
   </BrowserRouter>
 );
}



export default App;

/*

{["/", "/labs"].map(path => (
         <Route path={path}
                exact={true}
                element={<Labs/>}/>
         ))} */