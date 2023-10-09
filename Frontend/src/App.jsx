  import React from "react";
  import { Navbar, Home, User, Paper, Barco, Auth, Seccion, AgregarBarco, AgregarSeccion} from "./components"
  import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

  const App = () => {
    return (
      <div className="bg-primary  overflow-hidden">
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
            <Route path="/:barcoId/seccion" element={<Seccion />} />
            <Route path="/:barcoId/agregar_seccion" element={<AgregarSeccion />} />
            <Route path="/agregar_barco" element={<AgregarBarco />} />
            
          </Routes>
          
        </Router>
        </div>
        <div className="bg-primary flex justify-center items-start xl:max-w-[1280px] w-full">
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