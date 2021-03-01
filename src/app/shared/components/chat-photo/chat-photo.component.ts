import { Component, OnInit, Input } from '@angular/core';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';

@Component({
  selector: 'app-chat-photo',
  templateUrl: './chat-photo.component.html',
  styleUrls: ['./chat-photo.component.scss']
})
export class ChatPhotoComponent implements OnInit {

  @Input() message: ChatBalloon;

  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
