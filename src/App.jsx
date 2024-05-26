import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar'; 
import ItemlistContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ItemlistContainer />} />
      
      </Routes>
    </Router>
  );
}

export default App;
