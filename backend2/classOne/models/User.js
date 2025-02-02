const { DataTypes } = require("sequelize");
const { Grade } = require("./Grade")
const sequelize = require("../config/database");

const User = sequelize.define("Userr", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Grade);

module.exports = User;