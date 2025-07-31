import { Component, computed, input, output } from '@angular/core';
import { User } from '../../models/user';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  avatar = computed(() => `/assets/user-avatar.png`);
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
