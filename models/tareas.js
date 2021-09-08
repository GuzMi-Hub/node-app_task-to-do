const Tarea = require("./tarea");
const colors = require("colors");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id) {
    delete this._listado[id];
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  cargarTareasArr(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });

    console.log(this._listado);
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Incompleto".red;

      console.log(`${idx}. ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    let count = 0;
    let count2 = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Incompleto".red;

      if (completadas && estado === "Completado".green) {
        count++;
        console.log(`${colors.green(count + ".")} ${desc} :: ${completadoEn}`);
      } else if (!completadas && estado === "Incompleto".red) {
        count2++;
        console.log(`${colors.green(count2 + ".")} ${desc} :: ${estado}`);
      }
    });
  }
}

module.exports = Tareas;
