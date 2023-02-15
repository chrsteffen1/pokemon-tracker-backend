import { Profile } from "../models/profile.js"
import { Cartridge } from "../models/cartridge.js"
import axios from "axios"

function search(req, res){
  console.log(req.params.gameId, 'params')
  axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
  .then(response => {
    res.json(response.data) 
  })
  
}




export {
  search,

}