import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Componente } from "./Componente.js";

export const Seccion = sequelize.define(
    "secciones",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
);

Seccion.belongsToMany(Componente, {through: "Pertenece"});
Componente.belongsToMany(Seccion, {through: "Pertenece"});