import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Beer from "./Pages/Beer"
import Contacto from "./Pages/Contacto"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

function App() {
  return (
   <div>
     <Navbar/>
      <h1>Mas que solo bebidas, festejemos el encuentro.</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/beer/:id' element={<Beer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </div>
  )
}

export default App
