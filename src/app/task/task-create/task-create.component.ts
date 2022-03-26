import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  templateUrl: './task-create.component.html'
})
export class TaskCreateComponent implements OnInit {

  task: Task = {
    id: null,
    titulo: '',
    descricao: '',
  }

  isInvalid: boolean = false

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  handleSave(): void {
    if(this.task.titulo === '' || this.task.descricao === '') {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;

      this.taskService.handleSave(this.task).subscribe({
        next: () => {
          this.taskService.retrieveAll(),
          console.log('Salvo com sucesso')
          this.router.navigate(['/tasks'])
        },
        error: err => console.log(err)
      })
    }
  }
}
