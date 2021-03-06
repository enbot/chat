import { Component, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-head',
  templateUrl: './bot-head.component.html',
  styleUrls: ['./bot-head.component.scss']
})
export class BotHeadComponent {
  @Input() command: BotState;
}
