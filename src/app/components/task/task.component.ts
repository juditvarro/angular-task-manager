import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from '../../models/task';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
