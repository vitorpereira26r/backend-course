const sequelize = require("./config/database");
const User = require("./models/User");

async function connectAndSync() {
    try {
        await sequelize.authenticate();
        console.log("Database connection established successfully!");

        await User.sync();
        console.log("User model synchronized successfully!");

        // INSERT
        const newUser = await User.create({
            name: "Vitor",
            email: "vitorpereira@gmail.com",
            password: "password",
        });
        console.log("User created successfully.");

        // SELECT
        const users = await User.findAll();
        console.log("User's list: ", users.map((u) => u.toJSON()));

        // UPDATE
        const user = await User.findByPk(newUser.id);
        await user.update({ password: "newpassword" });
        console.log("User updated successfully: ", user.toJSON());

        //
    } catch (error) {
        console.log("Error connecting to the database", error);
    } finally {
        await sequelize.close();
        console.log("Database connection closed.");
    }
}

// Call the function
connectAndSync();