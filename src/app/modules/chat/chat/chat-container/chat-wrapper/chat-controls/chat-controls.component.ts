import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat-controls',
  templateUrl: './chat-controls.component.html',
  styleUrls: ['./chat-controls.component.scss']
})
export class ChatControlsComponent implements OnInit {

  public message: string;
  public placeholder: string;
  public disabled: boolean;

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit(): void {
    this.enableChat();
  }

  async send(): Promise<void> {
    this.disableChat();
    await this.chatService.input(this.message);
    setTimeout(() => this.enableChat(), 3000);
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
