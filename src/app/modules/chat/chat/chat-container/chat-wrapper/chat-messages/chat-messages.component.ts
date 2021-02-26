import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import { Subscription } from 'rxjs';
import { ChatMessage } from 'src/app/shared/models/general-config/chat-message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {

  // messages : 

  private receiveSubscription: Subscription;
  private sendSubscription: Subscription;
  private errorSubscription: Subscription;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {

    this.receiveSubscription = this.chatService.onReceive
      .subscribe((message: ChatMessage) => {
        console.log(message);
      });

    this.sendSubscription = this.chatService.onSend
      .subscribe((message: ChatMessage) => {
        console.log(message);
      });

    this.errorSubscription = this.chatService.onError
      .subscribe((error: Error) => {
        console.log(error);
      });

  }

  ngOnDestroy(): void {
    if (this.receiveSubscription || this.sendSubscription || this.errorSubscription) {
      this.receiveSubscription.unsubscribe();
      this.sendSubscription.unsubscribe();
      this.errorSubscription.unsubscribe();
    }
  }

}
