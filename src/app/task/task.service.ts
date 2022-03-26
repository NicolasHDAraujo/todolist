import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { Task } from "./task";

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private baseUrl: string = 'http://localhost:3000/tarefas'

  constructor(private httpClient: HttpClient, private router: Router) {}

    task: Task;

  retrieveAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  retrieveById(id: number): Observable<Task> {
    const response = this.httpClient.get<Task>(`${this.baseUrl}/${id}`);
    return response;
  }

  handleSave(task: Task): Observable<Task> {
    if(task.id) {
      const response = this.httpClient.put<Task>(`${this.baseUrl}/${task.id}`, task)
      this.router.navigate(['/tasks'])
      return response;
    } else {
      return this.httpClient.post<Task>(`${this.baseUrl}`, task);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }
}
