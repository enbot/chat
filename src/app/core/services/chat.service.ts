import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(
    private messageService: MessageService
  ) { }

  async send(content: string): Promise<void> {

    this.messageService.input(content);

    const message = new ChatMessage(content, 'you', 'left');

    this.onMessage.next(message);

    const response

  }

}
