const connection = require("../config/connection");
const { User, Plant } = require("../models/index");

const user = {
    username: "user123",
    email: "testemail@gmail.com",
    password: "password123",
}

const plant1 = {
    name: "Alien",
    earthPlant: false,
};

const plant2 = {
    name: "Human",
    earthPlant: true,
};

connection.once("open", async () => {
    // Delete all current data
    await User.deleteMany({});
    await Plant.deleteMany({});

    // Create new documents using data above
    await User.create(user);
    await Plant.create(plant1);
    await Plant.create(plant2);

    const sampleUser = await User.findOne({ username: "user123"});
    
    await Plant.findOneAndUpdate(
        { name: "Human" },
        { owner: sampleUser._id }
    );
    await Plant.findOneAndUpdate(
        { name: "Alien" },
        { owner: sampleUser._id }
    );

    // Exit the connection
    process.exit(0);
})