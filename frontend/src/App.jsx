import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import VideoArchives from "./pages/VideoArchives";
import Assessment from "./pages/Assessment";
import ConnectWithUs from "./pages/ConnectWithUs";
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page is the default landing page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/video-archives" element={<VideoArchives />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/connect-with-us" element={<ConnectWithUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
