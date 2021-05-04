import { Component, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-eye-right',
  templateUrl: './bot-eye-right.component.html',
  styleUrls: ['./bot-eye-right.component.scss']
})
export class BotEyeRightComponent {
  @Input() command: BotState;
}
