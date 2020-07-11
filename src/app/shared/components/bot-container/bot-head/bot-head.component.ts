import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';

@Component({
  selector: 'app-bot-head',
  templateUrl: './bot-head.component.html',
  styleUrls: ['./bot-head.component.scss']
})
export class BotHeadComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}
