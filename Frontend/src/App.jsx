import React from "react";
import {
  Navbar,
  Home,
  User,
  Paper,
  Barco,
  Auth,
  MenuSeccion,
  AgregarBarco,
  AgregarSeccion,
  Buscador,
  Componente_Menu,
  AgregarComponente,
  Solicitudes,
  CrearSolicitud,
  RevisarSolicitudes
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext"; // Reemplaza "path-to" con la ubicación real de tu AuthContext
import RutaProtegida from './components/auth/RutaProtegida';

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-sky-800 overflow-hidden">
        <div className="sm:px-16 px-6 max-w-full w-full">
          <Navbar />
        </div>
        <div>
          <Router>
            <Routes>
            <Route path="/usuarios" element={<RutaProtegida element = {<User />} />} />
              <Route path="/papers" element={<Paper />} />
              <Route path="/barco" element={<Barco />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/:barcoId/menuseccion" element={<MenuSeccion />} />
              <Route path="/:barcoId/agregar_seccion" element={<AgregarSeccion />} />
              <Route path="/agregar_barco" element={<AgregarBarco />} />
              <Route path="/Buscador" element={<Buscador />} />
              <Route path="/:barcoId/:seccionId/componente" element={<Componente_Menu />} />
              <Route path="/:barcoId/:seccionId/agregar_componente" element={<AgregarComponente />} />
              <Route path="/solicitudes" element={<Solicitudes />} />
              <Route path="/crear_solicitud" element={<CrearSolicitud />} />
              <Route path="/revisar_solicitudes" element={<RevisarSolicitudes />} />
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
    </AuthProvider>
  );
};

export default App;

// import React from "react";
  // import {
  //   Navbar,
  //   Home,
  //   User,
  //   Paper,
  //   Barco,
  //   Auth,
  //   MenuSeccion,
  //   AgregarBarco,
  //   AgregarSeccion,
  //   Buscador,
  //   Componente_Menu,
  //   AgregarComponente,
  //   Imagen3d,
  //   Solicitudes,
  //   CrearSolicitud

  // } from "./components"
  // import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

  // const App = () => {
  //   return (
  //     <div className="bg-sky-800   overflow-hidden ">
  //       <div className="sm:px-16 px-6 max-w-full w-full">
  //         <Navbar />
  //       </div>
  //       <div >
  //       <Router>
  //         <Routes>
  //           <Route path="/usuarios" element={<User />} />
  //           <Route path="/papers" element={<Paper />} />
  //           <Route path="/barco" element={<Barco />} />
  //           <Route path="/auth" element={<Auth />} />
  //           <Route path="/:barcoId/menuseccion" element={<MenuSeccion />} />
  //           <Route path="/:barcoId/agregar_seccion" element={<AgregarSeccion />} />
  //           <Route path="/agregar_barco" element={<AgregarBarco />} />
  //           <Route path="/Buscador" element={<Buscador />} />
  //           <Route path="/:barcoId/:seccionId/componente" element={<Componente_Menu />} />
  //           <Route path="/:barcoId/:seccionId/agregar_componente" element={<AgregarComponente />} />
  //           <Route path="/:barcoId/imagen3d" element={<Imagen3d />} />
  //           <Route path="/solicitudes" element={<Solicitudes />} /> 
  //           <Route path="/crear_solicitud" element={<CrearSolicitud />} /> 
  //         </Routes>
  //       </Router>
  //       </div>
  //       <div className="bg-primary flex justify-center items-start w-full">
  //         <Router>
  //           <Routes>

  //             <Route path="/" element={<Home />} />
  //           </Routes>
  //         </Router>
  //       </div>
  //     </div>
  //   );
    
  // }

  // export default App