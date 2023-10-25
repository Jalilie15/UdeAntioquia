import Inicio from './inicio/Inicio';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarritoCarga from './carritoCarga/CarritoCarga';
import DataProvider from './context/DataContext';

function App() {
  return(
    <DataProvider>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/carrito' element={<CarritoCarga />}></Route>
      </Routes>
    </BrowserRouter>
    </DataProvider>
    
       

  )
  

}

export default App;
