import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-error',
  imports: [],
  templateUrl: './messageError.component.html',
  styleUrl: './messageError.component.css',
})
export class MessageErrorComponent {
  @Input() message: string = '';
}
