import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TaskCreateComponent } from "./task-create/task-create.component";
import { TaskInfoComponent } from "./task-info/task-info.component";
import { TaskListComponent } from "./task-list/task-list.component";

@NgModule({
  declarations: [
    TaskListComponent,
    TaskInfoComponent,
    TaskCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TaskListComponent
      },
      {
        path: 'tasks/info/:id',
        component: TaskInfoComponent,
      },
      {
        path: 'tasks/create',
        component: TaskCreateComponent,
      },
    ])
  ],
})
export class TaskModule {}
