const connection = require("../config/connection");
const { User, Plant } = require("../models/index");

const user = {
    username: "user123",
    email: "testemail@gmail.com",
    password: "password123",
}

const plants = {
    name: "Petey",
    earthPlant: true,
}

connection.once("open", async () => {
    console.log("connected");
    await User.deleteMany({});
    await Plant.deleteMany({});

    await User.create(user);
    await Plant.create(plants);

    // const thoughtsData = Thought.find({});



    process.exit(0);
})