import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';

@Component({
  selector: 'app-bot-helmet',
  templateUrl: './bot-helmet.component.html',
  styleUrls: ['./bot-helmet.component.scss']
})
export class BotHelmetComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}
