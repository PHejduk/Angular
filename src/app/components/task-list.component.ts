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

  addTask(): void {
    const newTaskWithId: Task = { ...this.newTask, id: this.nextId++ };
    this.taskService.addTask(newTaskWithId);
    this.newTask = { id: 0, title: '', description: '', status: 'todo', functionalityId: 0 };
  }
}
