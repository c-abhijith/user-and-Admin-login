import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Views/Login";
import Navba from "./Components/Navba";
import Signup from "./Views/Signup";
import { AuthProvider } from "./context/AuthContext";
import Home from "./Views/Home";
import Admin from "./Views/Admin";
import Adduser from "./Views/Adduser";
import EditUser from "./Views/EditUser";


function App() {
  return (
    //   <Router>
    //      <div>
    //       <Navba />
    //        <Routes>
    //       <Route element={<Login  /> } path='/login' />
    //       <Route element={<Signup /> } path='/signup' />
    //       </Routes>
    //       <Footer />
    //      </div>
    //  </Router>

    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navba />
          {/* <Switch> */}
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Home />} path="/Home" />
            <Route element={<Admin/>} path="/admin" />
            <Route element={<Adduser/>} path="/admin/adduser" />
            <Route element={<EditUser/>} path="/admin/edituser/:id" />

            
          </Routes>
          {/* </Switch> */}
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
