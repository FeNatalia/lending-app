import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-item" element={<AddNew />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
