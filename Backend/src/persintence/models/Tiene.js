import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Seccion } from "./Seccion.js";
import { Barco } from "./Barco.js";

export const tiene = sequelize.define("tiene",{
    barco_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'barcos', 
            key: 'id', 
        },
    },
    seccion_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'secciones', 
            key: 'id', 
        },
    },
}, {
    timestamps: false,
    freezeTableName: true
});

tiene.belongsTo(Seccion, { foreignKey: "seccion_id"})
tiene.belongsTo(Barco, { foreignKey: "barco_id"})
