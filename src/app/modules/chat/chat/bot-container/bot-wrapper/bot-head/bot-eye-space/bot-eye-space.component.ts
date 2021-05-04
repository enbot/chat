import { Component, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-eye-space',
  templateUrl: './bot-eye-space.component.html',
  styleUrls: ['./bot-eye-space.component.scss']
})
export class BotEyeSpaceComponent {
  @Input() command: BotState;
}
