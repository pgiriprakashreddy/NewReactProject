import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import './index.scss' 
import { Product } from './components/Product';
import { Featured } from './components/Featured';
import { New } from './components/New';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={Home}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Product/>}>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<New/>}/>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
