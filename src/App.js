import { NavBar } from './archivos/components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HommePage, Calendar, Contact } from './archivos/components/direcciones'

function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar/>
    <Routes>
      <Route path = "/" element = {<HommePage/>}/>
      <Route path = "/calendar" element = {<Calendar/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
