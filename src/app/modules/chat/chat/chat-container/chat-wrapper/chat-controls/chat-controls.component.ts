import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/modules/chat/services/chat.service';

@Component({
  selector: 'app-chat-controls',
  templateUrl: './chat-controls.component.html',
  styleUrls: ['./chat-controls.component.scss']
})
export class ChatControlsComponent implements OnInit {
  public message: string;
  public placeholder: string;
  public disabled: boolean;
  public emotions = {
    anger: 0.0,
    fear: 0.0,
    joy: 0.0,
    love: 0.0,
    sadness: 0.0,
    surprise: 0.0,
  };

  constructor(private chatService: ChatService) { }

  public ngOnInit(): void {
    this.enableChat();
  }

  public async send(): Promise<void> {
    const message = this.message;

    if (message) {
      this.disableChat();
      await this.chatService.input(message);
      this.enableChat();
    }
  }

  public enableChat(): void {
    this.message = '';
    this.disabled = false;
    this.placeholder = 'Send a message...';
  }

  public disableChat(): void {
    this.message = '';
    this.disabled = true;
    this.placeholder = 'Waiting...';
  }
}
