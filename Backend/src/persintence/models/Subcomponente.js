import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Subcomponente = sequelize.define(
    "subcomponente",
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
      multimedia: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );