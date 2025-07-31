import { Component, inject, input } from '@angular/core';
import { User } from '../../models/user';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input.required<string>();
  user = input.required<User>();
  formDialogOpen = false;
  private tasksService = inject(TaskService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  onFormDialogOpen() {
    this.formDialogOpen = true;
  }

  onFormDialogClose() {
    this.formDialogOpen = false;
  }
}
