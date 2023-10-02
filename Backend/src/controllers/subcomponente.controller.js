import { Subcomponente } from "../persintence/models/Subcomponente.js";
import { createSubcomponente_, getSubcomponente_, updateSubcomponente_, deleteSubcomponente_} from "../persintence/repository/subcomponente.repository.js";

export async function createSubcomponente(req, res) {
  const { name, description, multimedia, componenteBarcoId} = req.body;
  const subcomponente = { 
    name,
    description, 
    multimedia,
    componenteBarcoId
  }
  createSubcomponente_(subcomponente).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getSubcomponente(req, res) {
    const { id } = req.params;
    getSubcomponente_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
  }

export async function updateSubcomponente(req, res) {
 
    const { id } = req.params;
    const { name, description ,  multimedia, componenteBarcoId } = req.body;
    const subcomponente = { 
      id,
      name,
      description,
      multimedia,
      componenteBarcoId
    }
    updateSubcomponente_(subcomponente).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteSubcomponente(req, res) {
  const { id } = req.params;
  deleteSubcomponente_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
};

