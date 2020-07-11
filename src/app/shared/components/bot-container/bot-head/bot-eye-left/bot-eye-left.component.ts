import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { TypeStyle } from 'src/app/shared/interfaces/type-metrics';

@Component({
  selector: 'app-bot-eye-left',
  templateUrl: './bot-eye-left.component.html',
  styleUrls: ['./bot-eye-left.component.scss']
})
export class BotEyeLeftComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}