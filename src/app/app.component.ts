import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task-app';
  users = [
    { id: 'userId1', name: 'John Doe', tasks: [] },
    { id: 'userId2', name: 'Jane Doe', tasks: [] },
    { id: 'userId3', name: 'Jim Doe', tasks: [] },
    { id: 'userId4', name: 'Juliette Doe', tasks: [] },
  ];
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
