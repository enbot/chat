import { Component, OnInit, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { TypeStyle, TypeClass } from 'src/app/shared/interfaces/type-metrics';

@Component({
  selector: 'app-bot-head',
  templateUrl: './bot-head.component.html',
  styleUrls: ['./bot-head.component.scss']
})
export class BotHeadComponent implements OnInit {

  @Input() command: BotCommand;

  constructor() { }

  ngOnInit(): void { }

  transform(command): TypeStyle {
    return {
      transform: `rotate(${command.head.rotate}deg)`
    };
  }

  classes(command): TypeClass {
    return `wrapper ${command.head.animation}`;
  }

}
