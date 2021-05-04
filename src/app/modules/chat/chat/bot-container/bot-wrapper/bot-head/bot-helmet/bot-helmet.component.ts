import { Component, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-helmet',
  templateUrl: './bot-helmet.component.html',
  styleUrls: ['./bot-helmet.component.scss']
})
export class BotHelmetComponent {
  @Input() command: BotState;
}
