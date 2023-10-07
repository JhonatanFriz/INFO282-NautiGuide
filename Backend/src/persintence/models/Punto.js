import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Barco } from "./Barco.js";
import { Seccion } from "./Seccion.js";

export const Punto = sequelize.define(
    "puntos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      xCoord: {
        type: DataTypes.INTEGER, // O el tipo de dato adecuado para las coordenadas x
        allowNull: false,
      },
      yCoord: {
        type: DataTypes.INTEGER, // O el tipo de dato adecuado para las coordenadas y
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
);

// Definir las relaciones con Barco y Seccion
Punto.belongsTo(Barco);
Punto.belongsTo(Seccion);