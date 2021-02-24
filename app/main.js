// import ValuesController from "./Controllers/ValuesController.js";

import PokeApiController from "./Controllers/PokeApiController.js";
import MyPokemonController from "./Controllers/MyPokemonController.js";

class App {
  // valuesController = new ValuesController();
  pokeApiController = new PokeApiController();
  myPokemonController = new MyPokemonController();
}

window["app"] = new App();
