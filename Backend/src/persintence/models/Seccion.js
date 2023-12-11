import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Componente } from "./Componente.js";
import { Imagen3d } from "./Imagen3d.js";

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
        type: DataTypes.STRING(5000),
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
);

Imagen3d.belongsTo(Seccion, { foreignkey: "seccionId", targetId: "id"})

Seccion.belongsToMany(Componente, {through: "Pertenece"});
Componente.belongsToMany(Seccion, {through: "Pertenece"});