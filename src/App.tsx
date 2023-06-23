import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AreaAssociado from "./Pages/AreaAssociado"
import Beneficios from "./Pages/Beneficios"
import Institucional from "./Pages/Institucional"
import Ecommerce from "./Pages/Ecommerce"
import Parceiros from "./Pages/Parceiros"

function App() {

  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/area-associado" element={<AreaAssociado />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/institucional" element={<Institucional/>}/>
          <Route path="/ecommerce" element={<Ecommerce />}/>
          <Route path="/parceiros" element={<Parceiros />}/>
        </Routes>
    </HashRouter>
  )
}

export default App
