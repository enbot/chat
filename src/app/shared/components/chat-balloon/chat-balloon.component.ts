import { Component, OnInit, Input } from '@angular/core';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';

@Component({
  selector: 'app-chat-balloon',
  templateUrl: './chat-balloon.component.html',
  styleUrls: ['./chat-balloon.component.scss']
})
export class ChatBalloonComponent implements OnInit {

  @Input() message: ChatBalloon;

  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
