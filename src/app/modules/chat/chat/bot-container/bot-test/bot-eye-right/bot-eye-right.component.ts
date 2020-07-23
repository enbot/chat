import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';

@Component({
  selector: 'app-bot-eye-right',
  templateUrl: './bot-eye-right.component.html',
  styleUrls: ['./bot-eye-right.component.scss']
})
export class BotEyeRightComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}
