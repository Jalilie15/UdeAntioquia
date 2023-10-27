import './App.css';
import CarritoCarga from './componentes/CarritoCarga';
import DataProvider from './componentes/DataContext';
import Inicio from './Routes/Inicio';
import Login from './Routes/Login';
import Logup from './Routes/logup';
import Admin from './Routes/admin';
import Index from './Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return(
    <DataProvider>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/carrito' element={<CarritoCarga />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logup' element={<Logup />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
    </DataProvider>
    
       

  )
  

}

export default App;
