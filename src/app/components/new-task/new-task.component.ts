import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../../models/task';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  userId = input.required<string>();
  close = output<void>();
  private tasksService = inject(TaskService);
  enteredTitle = '';
  enteredDescription = '';
  enteredDueDate = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        description: this.enteredDescription,
        dueDate: this.enteredDueDate,
      },
      this.userId()
    );
    this.close.emit();
  }
}
