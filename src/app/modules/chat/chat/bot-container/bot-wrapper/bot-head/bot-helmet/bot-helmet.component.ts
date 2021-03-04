import { Component, OnInit, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-helmet',
  templateUrl: './bot-helmet.component.html',
  styleUrls: ['./bot-helmet.component.scss']
})
export class BotHelmetComponent implements OnInit {

  @Input() command: BotState;

  constructor() { }

  public ngOnInit(): void { }

}
