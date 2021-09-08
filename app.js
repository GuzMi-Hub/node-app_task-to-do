const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");

console.clear();

const main = async () => {
  let opt = "";
  let tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        console.log(tareas._listado);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      default:
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
