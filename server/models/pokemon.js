const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({
    name: {
        type: String,
        require: "A name is required",
        trim: true,  
    },
    height: Number,
    weight: Number,
    base_experience: Number,
    image: String,
    moves: [String]
})
const Pokemon = ('Pokemon', pokemonSchema)

module.exports = Pokemon