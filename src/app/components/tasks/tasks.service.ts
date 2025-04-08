import { Injectable } from '@angular/core';
import dummyTasks from '../../../assets/tasks.json';
import { TaskData } from '../../models/task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = dummyTasks;

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => {
      return task.userId === userId;
    });
  }

  addTask(taskData: TaskData, userId: string) {
    this.tasks.unshift({
      ...taskData,
      userId,
      id: crypto.randomUUID(),
    });
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
