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
    // Delete all current data
    await User.deleteMany({});
    await Plant.deleteMany({});

    // Create new documents using data above
    await User.create(user);
    await Plant.create(plants);

    const sampleUser = await User.findOne({ username: "user123"});
    
    await Plant.findOneAndUpdate(
        { name: "Petey" },
        { owner: sampleUser._id }
    );

    // Exit the connection
    process.exit(0);
})