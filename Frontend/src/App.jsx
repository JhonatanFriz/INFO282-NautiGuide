  import React from "react";
  import { Navbar, Home, User, Paper, Barco, Auth, MenuSeccion, AgregarBarco, AgregarSeccion,Buscador} from "./components"
  import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

  const App = () => {
    return (
      <div className="bg-sky-800  overflow-hidden ">
        <div className="sm:px-16 px-6 max-w-full w-full">
          <Navbar />
        </div>
        <div >
        <Router>
          <Routes>
          
            <Route path="/usuarios" element={<User />} />
            <Route path="/papers" element={<Paper />} />
            <Route path="/barco" element={<Barco />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/:barcoId/menuseccion" element={<MenuSeccion />} />
            <Route path="/:barcoId/agregar_seccion" element={<AgregarSeccion />} />
            <Route path="/agregar_barco" element={<AgregarBarco />} />
            <Route path="/Buscador" element={<Buscador />} />
            
            
          </Routes>
        </Router>
        </div>
        <div className="bg-primary flex justify-center items-start w-full">
          <Router>
            <Routes>

              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
    
  }

  export default App