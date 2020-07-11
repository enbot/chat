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

  eye(): TypeStyle {
    return {
      width: `${this.command.eye.width}px`,
      height: `${this.command.eye.height}px`,
      borderRadius: `${this.command.eye.radius}%`,
      // clipPath: ``  this.command.clip.form
    };
  }

  sclera(): TypeStyle {
    return {
      borderRadius: `${this.command.eye.radius}%`,
    };
  }

  top(): TypeStyle {
    return {
      transform: `rotate(${this.command.wrapper.top.rotate}deg)`,
      width: `${this.command.wrapper.top.width}%`,
      height: `${this.command.wrapper.top.height}%`,
      top: `${this.command.wrapper.top.vertical}%`,
      left: `${this.command.wrapper.top.horizontal}%`,
    };
  }

  bot(): TypeStyle {
    return {
      transform: `rotate(${this.command.wrapper.bot.rotate}deg)`,
      width: `${this.command.wrapper.bot.width}%`,
      height: `${this.command.wrapper.bot.height}%`,
      bottom: `${this.command.wrapper.bot.vertical}%`,
      left: `${this.command.wrapper.bot.horizontal}%`,
    };
  }

}
