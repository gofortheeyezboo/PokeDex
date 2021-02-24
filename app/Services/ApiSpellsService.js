import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { dndApi } from "./AxiosService.js";

class ApiSpellsService{

  constructor(){
    console.log("api spells service");
    this.getDndApiSpells()
  }

  async getDndApiSpells(){
    try {
      const res = await dndApi.get("")
      console.log(res)
      ProxyState.dndApiSpells = res.data.results
    } catch (error) {
      console.error(error)
    }
  }

  async setActiveSpell(index) {
    try {
      let res = await dndApi.get(index)
      console.log(res)
      ProxyState.activeSpell = new Spell(res.data)
    } catch (error) {
      console.error(error)
    }
  }

}

export const apiSpellsService = new ApiSpellsService();