import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

{/* Aquí se crea el modelo "Barco" que representa a la entidad llamada "barcos"*/}
export const Barco = sequelize.define(
    "componentes",
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
    },
    {
      timestamps: false,
    }
  );