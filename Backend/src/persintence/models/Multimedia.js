import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Multimedia = sequelize.define(
    "multimedia",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
