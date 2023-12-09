import React, { useEffect, useState } from 'react';
import clientAxios from '../config/clienteAxios';
import BarcoCard from './BarcoCard';


function ListaBarcos({ setBarcoSeleccionado, setShow, eliminar }) {

  // Para manejar el barco que se está seleccionando
  const [barcos, setBarcos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await clientAxios.get('/barco/');
      setBarcos(res.data.data);
    };
    fetchPosts();
  }, []);
/*
  useEffect(() => {
    barcos.forEach((barco) => {
      console.log(barco.model);
    });
  }, [barcos]);
*/
  const handleEliminacion = (barcoId) => {
    const url = `/barco/${barcoId}`;
    clientAxios.delete(url);
    window.location.reload();
  };

  const handleBarcoClick = (barco) => {
    setBarcoSeleccionado(barco);
    setShow(true);
  };
  
  // Función para agrupar barcos por modelo
  const groupBarcosByModelo = () => {
    const groupedBarcos = {};
    barcos.forEach((barco) => {
      if (!groupedBarcos[barco.model]) {
        groupedBarcos[barco.model] = [];
      }
      groupedBarcos[barco.model].push(barco);
    });
    return groupedBarcos;
  };

  const groupedBarcos = groupBarcosByModelo();
  const modeloKeys = Object.keys(groupedBarcos).sort();

  const [expandedCard, setExpandedCard] = useState(null);

  const onToggleExpand = (modelo) => {
    setExpandedCard((prevExpanded) =>
      prevExpanded === modelo ? null : modelo
    );
  }


  return (
    <div className="bg-gray-100 p-1">
      <ul>
        <div className="flex flex-col gap-2">
          {modeloKeys.length > 0 ? (
            modeloKeys.map((modelo) => (
              <React.Fragment key={modelo}>
                <div
                  className="bg-white p-2 rounded shadow-md mb-2 grow mr-2"
                  onClick={() => onToggleExpand(modelo)}
                >
                  <li className="font-bold text-xl mb-2">{modelo}</li>
                </div>
                {expandedCard === modelo && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pe-4 ps-2">
                    {groupedBarcos[modelo].map((barco, index) => (
                      <li key={index} className=''>
                        <BarcoCard
                          barco={barco}
                          onBarcoClick={handleBarcoClick}
                          handleEliminacion={handleEliminacion}
                          eliminar={eliminar}
                        />
                      </li>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))
          ) : (
            <li>No hay barcos registrados.</li>
          )}
          </div>
      </ul>
    </div>
  );
}

export default ListaBarcos;
