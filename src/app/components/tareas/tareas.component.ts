import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  listTareas: Tarea[] = []
  nombreTarea = '';

  agregarTarea() {
    //crear un objeto tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //agregar objeto tarea al array
    this.listTareas.push(tarea);

    //reset form
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void{
    this.listTareas.splice(index, 1);

  }
  actualizarTarea(tarea: Tarea, index: number):void{
      this.listTareas[index].estado = !tarea.estado
  }

}
