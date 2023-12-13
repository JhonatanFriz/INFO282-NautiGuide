import { User } from "../persintence/models/User.js";

import { getUsers_, createUser_, getUser_, updateUser_, deleteUser_} from "../persintence/repository/user.repository.js";

export function getUsers(req, res) {
  getUsers_().then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  }) 
}
// let esPrimerUsuario = true;
export  function createUser(req, res) {
  const { name, mail, password, rol } = req.body;
    // Verificar si ya existe un usuario con el mismo correo
  User.findOne({ where: { mail: mail } })
  .then(existingUser => {
    if (existingUser) {
      res.status(400).json({ status: false, error: "Ya existe un usuario con este correo." });
    } else {
      const newUser = {
        name,
        mail,
        password,
        rol
        // rol: esPrimerUsuario ? 'ADMIN' : rol,
      };

      createUser_(newUser).then(data => {
          res.status(200).json({ status: true, data: data });
        })
        .catch(error => {
          res.status(400).json({ status: false, error: error.message });
        });
    }
  })
  .catch(error => {
    res.status(400).json({ status: false, error: error.message });
  });
  // if (esPrimerUsuario) {
  //   esPrimerUsuario = false;
  // }

  // const user ={
  //   name,
  //   mail,
  //   password,
  //   rol
  // }
  // createUser_(user).then(data => {
  //   res.status(200).json({status : true, data : data})
  // }, error => {
  //   res.status(400).json({status : false, error : error.message })
  // })
}

export async function getUser(req, res) {
  const { id } = req.params;
  getUser_(id).then(data => {
    res.status(200).json({status : true, data : data})
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
}

export const updateUser = async (req, res) => {

  const { id } = req.params;
  const { name, mail, password } = req.body;
  const user ={
    id, 
    name,
    mail,
    password
  }
  updateUser_(user).then(msg => {
    res.status(200).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
  
};

export  function deleteUser(req, res) {
  const { id } = req.params;
  deleteUser_(id).then(msg => {
    res.status(200).json({status : true, msg : msg })
  }, error => {
    res.status(400).json({status : false, error : error.message })
  })
    
  
}