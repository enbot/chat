import { Component, OnInit, Input } from '@angular/core';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  @Input() messages: ChatBalloon[];

  constructor() { }

  ngOnInit(): void { }

}
