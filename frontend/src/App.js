

import { Routes,Route} from "react-router-dom";
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
function App() {
  return (
   <>
  <Routes>
  <Route path="/"  element={<Home></Home>}/>
  <Route path="/login"  element={<Login></Login>}/>
 
  <Route path="/profile"  element={<Profile/>}/>
  </Routes>
   </>
  );
}

export default App;
