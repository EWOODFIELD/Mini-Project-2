import logo from './logo.svg';
import './App.css';
// import Example from './Components/ExampleComponent';
// import ButtonAppBar from './Components/AppBar';
import ResponsiveAppBar from './Components/ResponsiveNavBar';
// import SearchAppBar from './Components/Navbar';
// import { AppBar } from '@mui/material';
import {Routes,Route, Router} from 'react-router-dom';
import DragonPicture from './Components/SitePicture';
import UserGreeting from './Components/Greeting';
import HookCounterOne from './Components/DocumentTitle'
import Spells from './Components/Spells';
import Home from './Components/Home';
import WeaponProperties from './Components/WeaponProperties';
import MagicItemProperties from './Components/MagicItems';
import Register from './Components/Register';
import HomeImage from './Components/HomeImage';
import SignIn from './Components/AlternateSignIn';

function App() {
  return (
    <div className="App">
      
        {/* <AppBar /> */}
        <ResponsiveAppBar />
        <UserGreeting />
        {/* <Example /> */}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/spells" element={<Spells/>} />
        <Route path="/weapon-properties" element={<WeaponProperties/>} />
        <Route path="/magic-items" element={<MagicItemProperties/>} />
        <Route path="/signup" element={<SignIn/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
      
      {/* <DragonPicture /> */}
      <HookCounterOne />
      </div>
      
  )
}

export default App;
{/* <Routes>
        <Route path="/" element={<APICall/>} />
        </Routes> */}

