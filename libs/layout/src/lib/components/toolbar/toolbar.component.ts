import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { User } from '@demo-app/data-models';

@Component({
  selector: 'demo-app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() user: User;
  @Output() logout: EventEmitter<void> = new EventEmitter();

  onLogoutClick() {
    this.logout.emit();
  }
}
