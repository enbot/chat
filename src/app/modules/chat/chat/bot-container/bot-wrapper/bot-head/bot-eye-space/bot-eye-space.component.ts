import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';

@Component({
  selector: 'app-bot-eye-space',
  templateUrl: './bot-eye-space.component.html',
  styleUrls: ['./bot-eye-space.component.scss']
})
export class BotEyeSpaceComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void {
  }

}
