import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Ecommerce from './pages/ecommerce';
import Login from './pages/ecommLogin';
import Registrati from './pages/ecommRegistrati';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/accedi" element={<Login />} />
        <Route path="/registrati" element={<Registrati />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
