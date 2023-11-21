import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Imagen3d = sequelize.define(
    "imagenes3d",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        image: {
            type: DataTypes.STRING,
        },
    },
    {
      timestamps: false,
    }
);