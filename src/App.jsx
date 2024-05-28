import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar'; 
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NosotrosContainer from './components/NosotrosContainer/NosotrosContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ItemListContainer greeting />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/CalzadoHombre" element={<ItemListContainer />} />
        <Route path="/CalzadoMujer" element={<ItemListContainer />} />
        <Route path="/Nosotros" element={<NosotrosContainer />} />

      </Routes>
    </Router>
  );
}

export default App;
