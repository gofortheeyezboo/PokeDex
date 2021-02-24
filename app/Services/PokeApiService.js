import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { PokeApi } from "./AxiosService.js";

class PokeApiService{

  constructor(){
    console.log("Poke Api Service");
    this.getPokemon()
  }

  async getPokemon(){
    try {
      const res = await PokeApi.get("")
      console.log(res)
      ProxyState.apiPokemon = res.data.results
      ProxyState.next = res.data.next
      ProxyState.prev = res.data.previous
      console.log(res.data.next);
    } catch (error) {
      console.error(error)
    }
  }

  async setActivePokemon(id) {
    try {
      let res = await PokeApi.get(id)
      console.log(res.data)
      ProxyState.activePokemon = new Pokemon(res.data)
      
    } catch (error) {
      console.error(error)
    }
  }
  async next(){
    try{
      const res = await PokeApi.get(ProxyState.next)
      
      if(ProxyState.next != null){
        ProxyState.apiPokemon = res.data.results
        ProxyState.next = res.data.next
        ProxyState.prev = res.data.previous
      }else{
        alert('There is no next')
      }
    } catch (error){
      console.error(error)
    } 
  }
  async prev(){
    try{
      const res = await PokeApi.get(ProxyState.prev)
      
      if(ProxyState.prev != null){
        ProxyState.apiPokemon = res.data.results
        ProxyState.next = res.data.next
        ProxyState.prev = res.data.previous
      }else{
        alert('There is no previous')
      }
    } catch (error){
      console.error(error)
    } 
  }

}

export const pokeApiService = new PokeApiService();