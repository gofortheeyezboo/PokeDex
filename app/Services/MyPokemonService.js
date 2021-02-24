import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService{


constructor(){
  console.log("mypokemonservice");
  this.getMyPokemon()
}

async getMyPokemon(){
  try {
    let res = await sandboxApi.get("")
    console.log(res)
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    console.log(ProxyState.myPokemon)
  } catch (error) {
    console.error(error)
  }
}

async catchPokemon() {
  try {
    let res = await sandboxApi.post("", ProxyState.activePokemon)
    console.log(res)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
  } catch (error) {
    console.error(error)
  }
}

setActivePokemon(id) {
 let activePokemon = ProxyState.myPokemon.find(p => p.id == id)
 ProxyState.activePokemon = activePokemon
}

async releasePokemon(id) {
 try {
   await sandboxApi.delete(id)
   this.getMyPokemon()
   ProxyState.activePokemon = null
   } catch (error) {
   console.error(error)
 }
}

}

export const myPokemonService = new MyPokemonService();
