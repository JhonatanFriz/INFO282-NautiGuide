import { ComponenteBarco } from "../persintence/models/ComponenteBarco.js";
import { Subcomponente } from "../persintence/models/Subcomponente.js";

import { createComponenteBarco_, getComponenteBarco_, updateComponenteBarco_, deleteComponenteBarco_} from "../persintence/repository/componeneteBarco.repository.js";

export async function createComponenteBarco(req, res) {
  const { name, description, image, barcoId} = req.body;
  const componenteBarco = { 
    name,
    description, 
    image,
    barcoId
  }
  createComponenteBarco_(componenteBarco).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getComponenteBarco(req, res) {
    const { id } = req.params;
    getComponenteBarco_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
  }

export async function updateComponenteBarco(req, res) {
 
    const { id } = req.params;
    const { name, description ,  image, userId } = req.body;
    const componenteBarco = { 
      id,
      name,
      description,
      image,
      userId
    }
    updateComponenteBarco_(componenteBarco).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteComponenteBarco(req, res) {
  const { id } = req.params;
  deleteComponenteBarco_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
};



// Llega la información y reenvia a createpaper