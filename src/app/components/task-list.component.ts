import { Component } from '@angular/core';
import { Task } from '../models';
import { TaskService } from '../services/task.service';
import { UserService } from '../services/user.service';
import { FunctionalityService } from '../services/functionality.service';

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
  filterStatus: 'all' | 'todo' | 'doing' | 'done' = 'all';

  constructor(
    private taskService: TaskService,
    private userService: UserService,
    private functionalityService: FunctionalityService
  ) {
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

  getFilteredTasks(): Task[] {
    const filteredTasks = this.tasks.filter(task => {
      if (this.filterStatus === 'all') {
        return true;
      }
      return task.status === this.filterStatus;
    });


    filteredTasks.sort((a, b) => {
      const functionalityA = this.functionalityService.getFunctionalities().find(func => func.id === a.functionalityId);
      const functionalityB = this.functionalityService.getFunctionalities().find(func => func.id === b.functionalityId);

      if (functionalityA && functionalityB) {
        return functionalityA.title.localeCompare(functionalityB.title);
      } else if (functionalityA) {
        return -1;
      } else if (functionalityB) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTasks;
  }
}
