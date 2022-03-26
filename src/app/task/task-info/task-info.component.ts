import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  templateUrl: './task-info.component.html'
})
export class TaskInfoComponent implements OnInit {

  task: Task;

  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: task => this.task = task,
      error: err => console.log(err)
    })
  }

  handleSave(): void {
    this.taskService.handleSave(this.task).subscribe({
      next: () => console.log('Salvo com sucesso'),
      error: err => console.log(err)
    })
  }
}
