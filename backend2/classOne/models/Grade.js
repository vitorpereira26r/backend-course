const { DataTypes } = require("sequelize");
const { User } = require("./User")
const sequelize = require("../config/database");

const Grade = sequelize.define("Grade", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    value: DataTypes.INTEGER,
    subject: DataTypes.STRING,
});

Grade.belongsTo(User);

module.exports = Grade;