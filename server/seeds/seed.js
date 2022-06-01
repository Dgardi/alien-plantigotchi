const connection = require("../config/connection");
const { User, Plant } = require("../models/index");

const user = {
    username: "user123",
    email: "testemail@gmail.com",
    password: "password123",
}

const plants = {
    name: "Petey",
    owner: 1,
    earthPlant: true,
}

connection.once("open", async () => {
    console.log("connected");
    await User.deleteMany({});
    await Plant.deleteMany({});

    await User.collection.insertOne(user);
    await Plant.collection.insertOne(plants);

    // const thoughtsData = Thought.find({});



    process.exit(0);
})