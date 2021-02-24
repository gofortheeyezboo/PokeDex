export default class Spell{
  constructor(data){
    this.name = data.name
    this.description = data.desc || data.description
    this.range = data.range
    this.level = data.level || "No level provided"
    this.duration = data.duration
    this._id = data._id 

    if(Array.isArray(this.description)){
      this.description = this.description.join("\n")
    }
  }

  get ActiveTemplate(){
    return /*html*/`
    <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Spell Name: ${this.name}</h3>
                        <h4 class="card-text">Description: ${this.description}</h4>
                        <p class="card-text">Range: ${this.range}</p>
                        <p class="card-text">Level: ${this.level}</p>
                        <p class="card-text">Duration: ${this.duration}</p>
                        ${this.ButtonBuilder}
                    </div>
      </div>
    `
  }

  get ButtonBuilder(){
    if(this._id){
      return `
      <button class="btn btn-danger" onclick="app.mySpellsController.unlearnSpell()">Unlearn Spell</button>
      `
    }
    return `
      <button class="btn btn-success" onclick="app.mySpellsController.learnSpell()">Learn Spell</button>
      `
  }

}


// area_of_effect: {type: "sphere", size: 30}
// casting_time: "1 action"
// classes: (2) [{…}, {…}]
// components: (3) ["V", "S", "M"]
// concentration: true
// desc: (3) ["You create an invisible, magical eye within range that hovers in the air for the duration.", "You mentally receive visual information from the e… to 30 feet. The eye can look in every direction.", "As an action, you can move the eye up to 30 feet i…hrough an opening as small as 1 inch in diameter."]
// duration: "Up to 1 hour"
// index: "arcane-eye"
// level: 4
// material: "A bit of bat fur."
// name: "Arcane Eye"
// range: "30 feet"
// ritual: false
// school: {index: "divination", name: "Divination", url: "/api/magic-schools/divination"}
// subclasses: []
// url: "/api/spells/arcane-eye"



// {
//   "name": {
//     "type": "String",
//     "required": true
//   },
//   "description": {
//     "type": "String",
//     "required": true
//   },
//   "level": {
//     "type": "Number"
//   },
//   "range": {
//     "type": "String",
//     "required": true
//   },
//   "duration": {
//     "type": "String",
//     "required": true
//   },
//   "components": [
//     {
//       "type": "String"
//     }
//   ],
//   "user": {
//     "type": "String",
//     "required": true
//   }
// }
