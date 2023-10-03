import { Barco } from "../persintence/models/Barco.js"
import { Seccion } from "../persintence/models/Seccion.js";

import { getBarcos_, createBarco_, getBarco_, updateBarco_, deleteBarco_} from "../persintence/repository/barco.repository.js";

export function getBarcos(req, res) {
    getBarcos_().then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    }) 
}

export  function createBarco(req, res) {
    const { name, model, image, personalizado } = req.body;
    const user ={
      name, 
      model,
      image,
      personalizado
    }
    createBarco_(user).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
}

export async function getBarco(req, res) {
    const { id } = req.params;
    getBarco_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
}

export const updateBarco = async (req, res) => {

  const { id } = req.params;
  const { name, model, image, personalizado } = req.body;
  const barco ={
    id, 
    name, 
    model,
    image,
    personalizado
  }
  updateBarco_(barco).then(msg => {
    res.status(200).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};

export  function deleteBarco(req, res) {
  const { id } = req.params;
  deleteBarco_(id).then(msg => {
    res.status(200).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })  
}