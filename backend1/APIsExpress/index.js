const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.json());

const data = [];

// all users
app.get("/user", (request, response) => {
    response.status(200).send(data);
});

// user by id
app.get("/user/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const index = data.findIndex(user => user.id == id);
    response.status(200).send(data[index]);
});

app.post("/user", (request, response) => {
    const user = request.body;
    user.id = data.length;
    data.push(user);
    response.status(200).send(`User ${user.id} created.`)
});

app.put("/user/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const updatedUser = request.body;
    const index = data.findIndex(user => user.id == id);
    data[index] = updatedUser;
    response.status(200).send(`User ${id} updated.`);
});

app.delete("/user/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const index = data.findIndex(user => user.id == id);
    data.slice(index, 1);
    response.status(200).send(`User ${index} deleted.`)
});

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});