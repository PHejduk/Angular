import { Component } from '@angular/core';
import { Task } from '../models';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[];
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    status: 'todo',
    functionalityId: 0,
    important: false
  };
  defaultUser: { name: string };
  private nextId: number = 1;

  constructor(private taskService: TaskService, private userService: UserService) {
    this.tasks = taskService.getTasks();
    this.defaultUser = userService.getDefaultUser();
  }

  updateTask(task: Task, status: 'todo' | 'doing' | 'done'): void {
    task.status = status;
    this.taskService.updateTask(task);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }

  addTask() {
    this.newTask.id = this.taskService.getNextTaskId();
    this.taskService.addTask(this.newTask);
    this.newTask = { id: 0, title: '', description: '', status: 'todo', functionalityId: 0, important: false };
  }

  getFilteredTasks(): Task[] {
    // Puste ciało metody
    return [];
  }

  toggleImportant(task: Task): void {
    // Puste ciało metody
  }

  setFilterStatus(status: string): void {
    // Puste ciało metody
  }
}
