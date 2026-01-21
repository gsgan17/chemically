import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Compound = sequelize.define('Compound', {
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        primaryKey : true,
        autoIncrement : true,
    },
    name : {
        type : DataTypes.STRING(250),
        allowNull : false,
    },
    image : {
        type : DataTypes.STRING(250), 
        allowNull : true,
    },
    description : {
        type : DataTypes.TEXT, 
        allowNull : true,
    }
}, {
    tableName : 'compounds', 
    timestamps : false,
});

export default Compound;
