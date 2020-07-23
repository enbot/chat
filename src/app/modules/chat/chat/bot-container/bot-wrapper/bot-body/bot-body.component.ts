import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';

@Component({
  selector: 'app-bot-body',
  templateUrl: './bot-body.component.html',
  styleUrls: ['./bot-body.component.scss']
})
export class BotBodyComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}
