import { Profile } from "../models/profile.js"
import { Cartridge } from "../models/cartridge.js"
import axios from "axios"

function search(req, res){
  console.log(req.params.gameId, 'params')
  axios.get(`http://www.boredapi.com/api/activity/?type=${req.params.gameId}`)
  .then(response => {
    res.json(response.data) 
  })
  
}




export {
  search,

}