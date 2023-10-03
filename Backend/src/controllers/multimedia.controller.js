import { Multimedia } from "../persintence/models/Multimedia.js";
import { createMultimedia_, getMultimedia_, updateMultimedia_, deleteMultimedia_} from "../persintence/repository/multimedia.repository.js";

export async function createMultimedia(req, res) {
  const { url } = req.body;
  const multimedia = { 
    url
  }
  createMultimedia_(multimedia).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export async function getMultimedia(req, res) {
    const { id } = req.params;
    getMultimedia_(id).then(data => {
      res.status(200).json({status : true, data : data})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
  }

export async function updateMultimedia(req, res) {
 
    const { id } = req.params;
    const { name, description ,  imagen, seccionId } = req.body;
    const multimedia = { 
      id,
      name,
      description,
      imagen,
      seccionId
    }
    updateMultimedia_(multimedia).then(msg=> {
      res.status(200).json({status : true, msg : msg})
    }, error => {
      res.status(400).json({status : false, error : error.message })
    })
    
    
};

export async function deleteMultimedia(req, res) {
  const { id } = req.params;
  deleteMultimedia_(id).then(msg=> {
    res.status(200).json({status : true, msg : msg})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
};

