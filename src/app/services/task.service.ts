import { Injectable } from '@angular/core';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task); // Dodajemy kopię zadania do listy 'tasks'
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t === task);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
