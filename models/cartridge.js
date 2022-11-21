import mongoose from 'mongoose'

const Schema = mongoose.Schema

const logSchema = new Schema({
  content: {
    type: String,
    require: true
  },
  gym: {
    type: String,
    enum: ['1', '2', '3', '4', '5', '6', '7', '8', 'E4']
  },
}, {
  timestamps: true
})

const pokemonSchema = new Schema({
  name: {
    type: String,
    require: true 
  },
  pokedexId:{type: Number, required:true},
  alive: Boolean
  }, {
    timestamps: true,
  })

const cartridgeSchema = new Schema(
  {
    game:{ type: String, required: true,},
    pokemon:[pokemonSchema],
    gameStyle: { type: String, required: true,},
    logs:[logSchema]
  },
  { timestamps: true}
)

export { Cartridge }