import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChatApp from "./components/Screens/ChatApp";
import FilesModale from "./components/Screens/FilesModale";
import Home from "./components/Screens/Home";
import Login from "./components/Screens/Login";
import Profile from "./components/Screens/Profile";
import ProfileSec from "./components/Screens/ProfileSec";
import WorkShop from "./components/Screens/WorkShop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile/:id" element={<Profile/>}/> 
        <Route path="/profileSec/:idSec" element={<ProfileSec/>}/>
        <Route path="/workShop/:id" element={<WorkShop/>}  />
        <Route path ="/FilesModale/:idSec"element={<FilesModale/>}/>
        <Route path ="/Chat"element={<ChatApp/>}/>

      </Routes>
    </div>
  );
}

export default App;
