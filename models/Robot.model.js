const { Schema, model } = require("mongoose");

const robotSchema = new Schema(
    {
        Name: { type: String },
        Price: { type: Number || String },
        Description: {type: String},
        ImageUrl: {type: String}
    }
);

const Robot = model("Robot", robotSchema);

module.exports = Robot;