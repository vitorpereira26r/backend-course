const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
});

const data = [];

app.get("/vehicles", (request, response) => {
    return response.status(200).send({vehicles: data})
})

app.get("/vehicles/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const index = data.findIndex(user => user.id == id);
    response.status(200).send({vehicle: data[index]});
})

app.post("/vehicles", (request, response) => {
    const vehicle = request.body;
    vehicle.id = data.length;
    data.push(user);
    response.status(200).send({message: `Vehicle ${vehicle.id} created.`})
})

app.put("/vehicles/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const updatedVehicle = request.body;
    const index = data.findIndex(vehicle => vehicle.id == id);
    data[index] = updatedVehicle;
    response.status(200).send({message: `Vehicle ${id} updated.`});
})

app.delete("/vehicles/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const index = data.findIndex(vehicle => vehicle.id == id);
    data.slice(index, 1);
    response.status(200).send({message: `Vehicle ${index} deleted.`})
});