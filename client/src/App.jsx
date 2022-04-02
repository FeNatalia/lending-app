import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './contexts/DataProvider';
import { ModalProvider } from './contexts/ModalProvider';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import AddNew from './pages/AddNew';
import Home from './pages/Home';
import Login from './pages/Login';
import Feed from './pages/Feed';
import './index.css';
import SignUp from './pages/SignUp';

const App = () => {
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
          </Routes>
          <Footer />
        </Router>
      </ModalProvider>
    </DataProvider>
  );
};

export default App;
