require("colors");

const mostrarMenu = () => {
  console.clear();
  console.log("=========================".green);
  console.log("  Seleccione una opcion  ".green);
  console.log("=========================".green);

  console.log(`${"1.".green} Crear tarea`);
  console.log(`${"2.".green} Listar tareas`);
  console.log(`${"3.".green} Listar tareas completadas`);
  console.log(`${"4.".green} Listar tareas pendientes`);
  console.log(`${"5.".green} Completar tarea(s)`);
  console.log(`${"6.".green} Borrar tarea`);
  console.log(`${"0.".green} Salir\n`);

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stout,
  });

  readline.question("Seleccione una opción: ", (opt) => {
    console.log({ opt });
    readline.close();
  });
};

module.exports = { mostrarMenu };
