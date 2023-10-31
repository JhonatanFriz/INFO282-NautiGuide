import { Seccion } from "../persintence/models/Seccion.js";
import { Componente } from "../persintence/models/Componente.js";

import {
  createSeccion_,
  getSecciones_,
  getSeccion_,
  updateSeccion_,
  deleteSeccion_,
  getSeccionComponentes_,
  unir_barco_seccion_,
  llamar_barco_seccion_}
  from "../persintence/repository/seccion.repository.js";

export async function createSeccion(req, res) {
  const { name, description, image, barcoId} = req.body;
  const seccion = { 
    name,
    description, 
    image
  }
  createSeccion_(seccion).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getSecciones(req, res) {
  getSecciones_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function getSeccion(req, res) {
    const { id } = req.params;
    getSeccion_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
  }

export async function updateSeccion(req, res) {
 
    const { id } = req.params;
    const { name, description ,  image} = req.body;
    const seccion = { 
      id,
      name,
      description,
      image
    }
    updateSeccion_(seccion).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteSeccion(req, res) {
  const { id } = req.params;
  deleteSeccion_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
};

export async function getSeccionComponentes(req, res) {
  const { id } = req.params;
  getSeccionComponentes_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function unir_barco_seccion(req, res){
  const { barcoId } = req.params;
  unir_barco_seccion_(barcoId,req.body).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}

export async function llamar_barco_seccion(req, res){
  const { barcoId } = req.params;
  llamar_barco_seccion_(barcoId).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
}