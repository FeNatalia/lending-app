import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { DataProvider } from "./contexts/DataProvider";
import { ModalProvider } from "./contexts/ModalProvider";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import AddNew from "./pages/AddNew";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import "./index.css";
import "./styles/style.css";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Chat from "./pages/Chat";
import { getUser } from "./api";
import { useAuth } from "./contexts/AuthProvider";
const App = () => {
  const { setUser, setIsLogged } = useAuth();

  const fetchUser = useCallback(async () => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      const user = await getUser(uid);
      setUser(user);
      setIsLogged(true);
    }
  }, [setUser, setIsLogged]);

  useEffect(() => fetchUser(), [fetchUser]);

  return (
    <DataProvider>
      <ModalProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-item" element={<AddNew />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/help" element={<Help />} />
          </Routes>
          <Footer />
        </Router>
      </ModalProvider>
    </DataProvider>
  );
};

export default App;
