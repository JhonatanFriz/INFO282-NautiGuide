import { User } from "../models/User.js"
import { Paper } from "../models/Paper.js";


export async function getUsers_(){
    try {
        const users = await User.findAll({
          atributes: ["id", "rut", "name", "mail"],
        });

        return users
      } catch (error) {
        
        throw new Error("Sucedio un error......")
        
      }
}

{/* Se instala bcrypt con npm install bcrypt */}
//const bcrypt = require('bcrypt');

export async function createUser_(user){
    const { name, mail, password, rol } = user;
    try{

        //const hashedPassword = await bcrypt.hash(password, 10);

        let newUser = await User.create(
            {
            name,
            mail,
            password,
            rol,
            },
            {
            fields: ["name", "rut", "mail", "password", "rol"],
            }
        );
      return newUser
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
    

}


export async function getUser_(id){
    try {
        const user = await User.findOne({
          where: {
            id,
          },
        });
        return user
      } catch (error) {
        throw new Error("Sucedio un error......")
      }
}

export async function updateUser_(user){
    const {id, name, mail, password} = user 
    try {
        const user = await User.findByPk(id);
        user.name = name;
        user.mail = mail;
        user.password = password;
        await user.save();
        return "Usuario Modificado"
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}

export async function deleteUser_(id){
    try {
        await Paper.destroy({
        where: {
            userId: id,
        },
        });
        await User.destroy({
            where: {
            id,
        },
        });
        return "Se elimino el usuario correctamente.. "
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}


export async function getUserPapers_(id){
    try {
        const tasks = await Paper.findAll({
            attributes: ["id", "name", "date", "description", "userId"],
            where: { userId: id },
          });
          return tasks;
    } catch (error) {
        throw new Error("Sucedio un error......")
    }
}