export default class Pokemon{
  constructor(data){
    this.name = data.name
    this.img = data.img || data.sprites.front_default
    this.description = data.description || "It's a Pokemon"
    this.weight = data.weight
    this.height = data.height
    this.user = data.user || "Zac"
    this.id = data._id || data.id
    
  }

  get ActiveTemplate(){
    return /*html*/`
    <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Pokemon Name: ${this.name}</h3>
                        <h4 class="card-text">Description: ${this.description}</h4>
                        <img src='${this.img}'>
                        <p class="card-text">Height: ${this.height}</p>
                        <p class="card-text">Weight: ${this.weight}</p>
                        ${this.ButtonBuilder}
                    </div>
      </div>
    `
  }

  get ButtonBuilder(){
    if(this.user != 'Zac'){
      return `
      <button class="btn btn-danger" onclick="app.myPokemonController.releasePokemon('${this.id}')">Release Pokemon</button>
      `
    }
    return `
      <button class="btn btn-success" onclick="app.myPokemonController.catchPokemon()">Catch Pokemon</button>
      `
  }

}

