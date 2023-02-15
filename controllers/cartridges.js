import { Profile } from "../models/profile.js"
import { Cartridge } from "../models/cartridge.js"
import axios from "axios"

function search(req, res){
  console.log(req.query.gameQuery, 'params')
  const gameId = req.query.gameQuery
  axios.get(`https://pokeapi.co/api/v2/version/${gameId}`)
  .then(response => {
    res.json(response.data) 
  })
  .catch(error => {
    console.log(error)
    res.status(500).send("Error retrieving Pokemon")
  })
  
}




export {
  search,

}