import { Component, OnInit, Input } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
  selector: 'app-bot-body',
  templateUrl: './bot-body.component.html',
  styleUrls: ['./bot-body.component.scss']
})
export class BotBodyComponent implements OnInit {

  @Input() command: BotState;

  constructor() { }

  public ngOnInit(): void { }

}
