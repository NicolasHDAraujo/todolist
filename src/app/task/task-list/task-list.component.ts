import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  templateUrl: './task-list.component.html',
})

export class TaskListComponent implements OnInit {
  filteredTasks: Task[] = [];

  _tasks: Task[] = [];
  _filterByTitle: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.taskService.retrieveAll().subscribe({
      next: tasks => {
        this._tasks = tasks;
        this.filteredTasks = this._tasks;
      },
      error: err => console.error(err)
    })
  }

  deleteById(taskId: number): void {
    this.taskService.deleteById(taskId).subscribe({
      next: () => {
        console.log('Deletado com sucesso');
        this.retrieveAll()
      },
      error: (err) => console.log(err)
    })
  }

  set filter(value: string) {
    this._filterByTitle = value;

    this.filteredTasks = this._tasks.filter((task: Task) => task.titulo.toLowerCase().indexOf(this._filterByTitle.toLowerCase()) > -1)
  }

  get filter() {
    return this._filterByTitle;
  }
}
