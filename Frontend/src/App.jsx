import React from "react";
import {
  Navbar,
  Home,
  User,
  UserAdmin,
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
import { AuthProvider } from "./components/AuthContext";
import RutaProtegida from './components/auth/RutaProtegida';

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-sky-800 overflow-hidden h-screen flex flex-col flex-grow">
        <div className="sm:px-16 px-6 max-w-full w-full">
          <Navbar />
        </div>
        <div className="flex flex-col min-h-0">
          <Router>
            <Routes>
              {/* <Route path="/usuarios" element={<RutaProtegida element = {<User />} />} /> */}
              <Route path="/usuarios" element={<RutaProtegida><UserAdmin /></RutaProtegida>} />
              <Route path="/new-user" element={<User />} />
              {/* <Route path="/usuarios" element={<User />} /> trampa */}
              {/* <Route path="/usuarios" element={<User />} /> */}
              {/* <Route path="/usuarios/:id" element={<RutaProtegida><UserDetail /></RutaProtegida>} /> */}
              <Route path="/papers" element={<Paper />} />
              <Route path="/barco" element={<Barco />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/:barcoId/menuseccion" element={<MenuSeccion />} />
              <Route path="/:barcoId/agregar_seccion" element={<AgregarSeccion />} />
              <Route path="/agregar_barco" element={<RutaProtegida><AgregarBarco /></RutaProtegida>}/>
              <Route path="/Buscador" element={<Buscador />} />
              <Route path="/:barcoId/:seccionId/componente" element={<Componente_Menu />} />
              <Route path="/:barcoId/:seccionId/agregar_componente" element={<AgregarComponente />} />
              <Route path="/solicitudes" element={<Solicitudes />} />
              <Route path="/crear_solicitud" element={<CrearSolicitud />} />
              <Route path="/revisar_solicitudes" element={<RevisarSolicitudes />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
        <div className="flex flex-col min-h-0">
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