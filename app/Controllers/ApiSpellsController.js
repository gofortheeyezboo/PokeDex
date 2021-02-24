import { ProxyState } from "../AppState.js";
import {apiSpellsService} from "../Services/ApiSpellsService.js"

function _drawDndApiSpells(){
  let spells = ProxyState.dndApiSpells
  // console.log(spells)
  // console.log("draw fn");
  let template = ""
  spells.forEach(s=> template += `<li onclick="app.apiSpellsController.setActiveSpell('${s.index}')"> ${s.name} </li>`)
  document.getElementById("api-spells").innerHTML =template;

}

function _drawActiveSpell(){
  if(ProxyState.activeSpell){
    document.getElementById("active-spell").innerHTML = ProxyState.activeSpell.ActiveTemplate
  }else {
    document.getElementById("active-spell").innerHTML = ""
  }
}

export default class ApiSpellsController{
  constructor(){
    console.log("apispellscontroller");
    ProxyState.on("dndApiSpells", _drawDndApiSpells)
    ProxyState.on("activeSpell", _drawActiveSpell)
  }

  setActiveSpell(index){
    console.log(index)
    apiSpellsService.setActiveSpell(index)
  }
}