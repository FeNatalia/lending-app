const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        _id: {
            type: Schema.Types.Mixed,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
