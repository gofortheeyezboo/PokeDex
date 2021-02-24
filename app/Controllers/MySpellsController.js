import { ProxyState } from "../AppState.js";
import {mySpellsService} from "../Services/MySpellsService.js"

function _drawMySpells(){
  let spells = ProxyState.mySpells
  // console.log(spells)
  // console.log("draw fn");
  let template = ""
  spells.forEach(s=> template += `<li onclick="app.mySpellsController.setActiveSpell('${s._id}')" > ${s.name} </li>`)
  document.getElementById("my-spells").innerHTML =template;
}
export default class MySpellsController{
  constructor(){
    console.log("myspellscontroller");
    ProxyState.on("mySpells", _drawMySpells)
  }

  learnSpell(){
    mySpellsService.learnSpell()
  }

  setActiveSpell(id){
    mySpellsService.setActiveSpell(id)
  }

  unlearnSpell(){
    mySpellsService.unlearnSpell()
  }
}