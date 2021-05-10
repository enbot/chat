import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/modules/chat/services/chat.service';
import { EmotionCategorization } from 'src/app/shared/interfaces/emotion';

@Component({
  selector: 'app-chat-controls',
  templateUrl: './chat-controls.component.html',
  styleUrls: ['./chat-controls.component.scss']
})
export class ChatControlsComponent implements OnInit {
  public message: string;
  public placeholder: string;
  public disabled: boolean;
  private categorization: EmotionCategorization;

  constructor(
    private chatService: ChatService,
  ) {
    this.categorization = {
      anger: 0.0,
      fear: 0.0,
      joy: 0.0,
      love: 0.0,
      sadness: 0.0,
      surprise: 0.0,
    };
  }

  public ngOnInit(): void {
    this.enableChat();
    this.sendDefaultMessage();
  }

  public async send(): Promise<void> {
    const newMessage = this.message;
    const newCategorization = this.categorization;

    if (newMessage) {
      this.disableChat();
      this.categorization = await this.chatService.input(newMessage, newCategorization);
      this.enableChat();
    }
  }

  public sendDefaultMessage() {
    this.chatService.propagateMessage('Hello! I\'m Enbot. Talk to me!', 'enbot', 'left');
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
