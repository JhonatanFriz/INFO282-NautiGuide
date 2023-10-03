import { Componente } from "../persintence/models/Componente.js";
import { createComponente_, getComponente_, updateComponente_, deleteComponente_} from "../persintence/repository/componente.repository.js";

export async function createComponente(req, res) {
  const { name, description, image, seccionId} = req.body;
  const componente = { 
    name,
    description, 
    image,
    seccionId
  }
  createComponente_(componente).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getComponente(req, res) {
    const { id } = req.params;
    getComponente_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
  }

export async function updateComponente(req, res) {
 
    const { id } = req.params;
    const { name, description ,  image, seccionId } = req.body;
    const componente = { 
      id,
      name,
      description,
      image,
      seccionId
    }
    updateComponente_(componente).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteComponente(req, res) {
  const { id } = req.params;
  deleteComponente_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
};
