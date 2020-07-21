import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';

@Component({
  selector: 'app-bot-face',
  templateUrl: './bot-face.component.html',
  styleUrls: ['./bot-face.component.scss']
})
export class BotFaceComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

}
