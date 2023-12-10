import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Paper } from "./Paper.js";
import { Barco } from "./Barco.js";
import { Solicitud } from "./Solicitud.js";

export  const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

//User.hasMany(Paper, {
//  foreinkey: "userId",
//  sourceKey: "id",
//});
//Paper.belongsTo(User, { foreinkey: "userId", targetId: "id" });

Solicitud.belongsTo(User, { foreinkey: "userId", targetId: "id" });

User.belongsToMany(Barco, {through: "Favorito"});
Barco.belongsToMany(User, {through: "Favorito"});
