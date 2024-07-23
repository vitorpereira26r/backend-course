const express = require("express");
const app = express();
const db = require('./db.js');
const dbContext = db.UserDatabase()

const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});

// all users
app.get("/user", async (request, response) => {
    response.status(200).send(await {users: dbContext.list});
});

// user by id
app.get("/user/:id", async (request, response) => {
    response.status(200).send(await {user: dbContext.get(request.params.id)})
});

app.post("/user", async (request, response) => {
    response.status(200).send(await {user: dbContext.insert(request.body)})
});

app.put("/user/:id", async (request, response) => {
    response.status(200).send(await {user: dbContext.update(request.body, request.params.id)});
});

app.delete("/user/:id", async (request, response) => {
    await dbContext.del(request.params.id)
    response.status(200).send({message: `User ${index} deleted.`})
});