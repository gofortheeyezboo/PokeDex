// import ValuesController from "./Controllers/ValuesController.js";

import ApiSpellsController from "./Controllers/ApiSpellsController.js";
import MySpellsController from "./Controllers/MySpellsController.js";

class App {
  // valuesController = new ValuesController();
  apiSpellsController = new ApiSpellsController();
  mySpellsController = new MySpellsController();
}

window["app"] = new App();
