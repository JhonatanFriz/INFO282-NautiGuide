import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
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

Solicitud.belongsTo(User, { foreinkey: "userId", targetId: "id" });

User.belongsToMany(Barco, {through: "Favorito"});
Barco.belongsToMany(User, {through: "Favorito"});
