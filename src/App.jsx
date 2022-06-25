import "./App.css";
import AdminAuth from "./pages/Login";
// import Home from "./pages/frontoffice/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/protectedRoute";
import AdminDash from "./pages/AdminDash";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/frontoffice/Navbar"
import Experts from "./pages/Experts"
import Cars from './pages/Cars'
import Footer from "./components/frontoffice/Footer";

function App() {
  const pathname = window.location.pathname
  return (
    <div className="App">
          
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/cars" element={<Cars />} />
          {/* ------------------------ Back_Office ------------------------ */}
          <Route path="/login" element={<AdminAuth />} />
          <Route
            path="/admin"
            element={
              // <ProtectedRoute role="admin">
                <AdminDash />
              // </ProtectedRoute>
            }
          />
            
          

        </Routes>
      </BrowserRouter>
      < Footer />
    </div>
  );
}

export default App;
