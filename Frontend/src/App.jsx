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
            <Route path="/usuarios" element={<RutaProtegida requiredRole="ADMIN"><UserAdmin /></RutaProtegida>} />
            <Route path="/new-user" element={<User />} />
            <Route path="/papers" element={<Paper />} />
            <Route path="/barco" element={<Barco />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/:barcoId/menuseccion" element={<MenuSeccion />} />
            <Route path="/:barcoId/agregar_seccion" element={<RutaProtegida requiredRole="ADMIN"><AgregarSeccion /></RutaProtegida>} />
            <Route path="/agregar_barco" element={<RutaProtegida requiredRole="ADMIN"><AgregarBarco /></RutaProtegida>} />
            <Route path="/Buscador" element={<Buscador />} />
            <Route path="/:barcoId/:seccionId/componente" element={<Componente_Menu />} />
            <Route path="/:barcoId/:seccionId/agregar_componente" element={<RutaProtegida requiredRole="ADMIN"><AgregarComponente /></RutaProtegida>} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/crear_solicitud" element={<RutaProtegida requiredRole="USUARIO"><CrearSolicitud /></RutaProtegida>} />
            <Route path="/revisar_solicitudes" element={<RutaProtegida requiredRole="ADMIN"><RevisarSolicitudes /></RutaProtegida>} />
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