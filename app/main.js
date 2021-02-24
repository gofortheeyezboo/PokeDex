// import ValuesController from "./Controllers/ValuesController.js";

import ApiSpellsController from "./Controllers/ApiSpellsController.js";

class App {
  // valuesController = new ValuesController();
  apiSpellsController = new ApiSpellsController();
}

window["app"] = new App();
