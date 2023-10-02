import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Paper } from "./Paper.js";

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
    },
    rut: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Paper, {
  foreinkey: "userId",
  sourceKey: "id",
});
Paper.belongsTo(User, { foreinkey: "userId", targetId: "id" });
