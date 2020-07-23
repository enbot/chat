import { Component, OnInit, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot-states/bot-state';

@Component({
  selector: 'app-bot-eye-space',
  templateUrl: './bot-eye-space.component.html',
  styleUrls: ['./bot-eye-space.component.scss']
})
export class BotEyeSpaceComponent implements OnInit {

  @Input() command: BotState;

  constructor() { }

  ngOnInit(): void { }

}
