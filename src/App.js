import './App.css';
import Inicio from './Routes/Inicio';
import Login from './Routes/Login';
import Logup from './Routes/logup';
import Admin from './Routes/admin';
import Index from './Routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return(
       
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/index' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logup' element={<Logup />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
    
    
       

  )
  

}

export default App;
