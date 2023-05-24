import {BrowserRouter,Routes,Route} from "react-router-dom";
import Intereses from "./pages/Intereses";
import IngresarTarjeta from "./pages/IngresarTarjeta";
import IngresarClubes from "./pages/IngresarClubes";
import Home from './pages/Home'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intereses/>} /> 
      <Route path='/IngresarTarjetas' element={<IngresarTarjeta/>}/>
      <Route path='/IngresarClubes' element={<IngresarClubes/>}/>
      <Route path="Home" element={<Home/>}/>
    </Routes> 
  </BrowserRouter>    
  );
}

export default App;
