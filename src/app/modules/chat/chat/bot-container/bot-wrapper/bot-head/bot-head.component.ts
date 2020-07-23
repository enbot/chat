import { Component, OnInit, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot-states/bot-state';

@Component({
  selector: 'app-bot-head',
  templateUrl: './bot-head.component.html',
  styleUrls: ['./bot-head.component.scss']
})
export class BotHeadComponent implements OnInit {

  @Input() command: BotState;

  constructor() { }

  ngOnInit(): void { }

}
