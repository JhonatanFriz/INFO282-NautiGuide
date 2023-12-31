import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Seccion } from "./Seccion.js";

export const Barco = sequelize.define(
    "barcos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      model: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      personalizado: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    }
  );

Barco.belongsToMany(Seccion, {through: "Tiene"});
Seccion.belongsToMany(Barco, {through: "Tiene"});