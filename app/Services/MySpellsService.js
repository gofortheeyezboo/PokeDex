import { ProxyState } from "../AppState.js";
import Spell from "../Models/Spell.js";
import { sandboxApi } from "./AxiosService.js";

class MySpellsService{


constructor(){
  console.log("myspellsserv");
  this.getMySpells()
}

async getMySpells(){
  try {
    let res = await sandboxApi.get("")
    console.log(res)
    ProxyState.mySpells = res.data.map(s => new Spell(s))
    console.log(ProxyState.mySpells)
  } catch (error) {
    console.error(error)
  }
}

async learnSpell() {
  try {
    let res = await sandboxApi.post("", ProxyState.activeSpell)
    console.log(res)
    // this.getMySpells()
    ProxyState.mySpells = [...ProxyState.mySpells, new Spell(res.data)]
  } catch (error) {
    console.error(error)
  }
}

setActiveSpell(id) {
 let activeSpell = ProxyState.mySpells.find(s => s._id == id)
 ProxyState.activeSpell = activeSpell
}

async unlearnSpell() {
 try {
   await sandboxApi.delete(ProxyState.activeSpell._id)
   this.getMySpells()
   ProxyState.activeSpell = null
   } catch (error) {
   console.error(error)
 }
}

}

export const mySpellsService = new MySpellsService();
