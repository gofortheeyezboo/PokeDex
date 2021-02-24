import { ProxyState } from "../AppState.js";
import {myPokemonService} from "../Services/MyPokemonService.js"

function _drawMyPokemon(){
  let pokemon = ProxyState.myPokemon
  let template = ""
  pokemon.forEach(p => template += `<li onclick="app.myPokemonController.setActivePokemon('${p.id}')" > ${p.name} </li>`)
  document.getElementById("my-pokemon").innerHTML =template;
}
export default class MyPokemonController{
  constructor(){
    console.log("mypokemoncontroller");
    ProxyState.on("myPokemon", _drawMyPokemon)
  }

  catchPokemon(){
    myPokemonService.catchPokemon()
  }

  setActivePokemon(id){
    myPokemonService.setActivePokemon(id)
  }

  releasePokemon(id){
    myPokemonService.releasePokemon(id)
  }
}