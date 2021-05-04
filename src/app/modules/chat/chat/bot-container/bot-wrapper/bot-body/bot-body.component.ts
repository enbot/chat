import { Component, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-body',
  templateUrl: './bot-body.component.html',
  styleUrls: ['./bot-body.component.scss']
})
export class BotBodyComponent {
  @Input() command: BotState;
}
