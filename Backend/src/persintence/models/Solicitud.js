import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Solicitud = sequelize.define(
  "solicitudes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(1200),
    },
  },
  {
    timestamps: false,
  }
);
