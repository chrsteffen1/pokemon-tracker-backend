import { Profile } from "../models/profile.js"
import { Cartridge } from "../models/cartridge.js"
import axios from "axios"

function search(req, res){
  axios.get(`https://pokeapi.co/api/v2/version/red`)
  .then(response => {
    res.json(response.data.hits)
  })
}



export {
  search,
}