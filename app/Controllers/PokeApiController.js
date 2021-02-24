import { ProxyState } from "../AppState.js";
import {pokeApiService} from "../Services/PokeApiService.js"

function _drawApiPokemon(){
  let pokemon = ProxyState.apiPokemon

  let template = ""
  pokemon.forEach(p=> template += `<li onclick="app.pokeApiController.setActivePokemon('${p.name}')"> ${p.name} </li>`)
  document.getElementById("wild-pokemon").innerHTML =template;

}

function _drawActivePokemon(){
  if(ProxyState.activePokemon){
    document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
  }else {
    document.getElementById("active-pokemon").innerHTML = ""
  }
}

export default class PokeApiController{
  constructor(){
    console.log("PokeApiController");
    ProxyState.on("apiPokemon", _drawApiPokemon)
    ProxyState.on("activePokemon", _drawActivePokemon)
  }

  setActivePokemon(name){
    console.log(name)
    pokeApiService.setActivePokemon(name)
  }
  next() {
    pokeApiService.next()
  }
  prev(){
    pokeApiService.prev()
  }
}