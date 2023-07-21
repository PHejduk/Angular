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
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex((t) => t === task);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
  getNextTaskId(): number {
    return this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1;
  }
}
