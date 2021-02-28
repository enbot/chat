import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatMessage } from 'src/app/shared/models/general-config/chat-message';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit, OnDestroy {

  messages: ChatBalloon[];

  // import { ChatMessage } from '../models/general-config/chat-message';
  // import { ChatCommand } from './chat-types';

  // message: ChatMessage;
  // command: ChatCommand;

  private receiveSubscription: Subscription;
  private sendSubscription: Subscription;
  private errorSubscription: Subscription;

  constructor(
    private chatService: ChatService,
    private commandService: CommandService,
  ) { }

  public ngOnInit(): void {

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

  public onChatMessage() {

  }

  public ngOnDestroy(): void {
    if (this.receiveSubscription || this.sendSubscription || this.errorSubscription) {
      this.receiveSubscription.unsubscribe();
      this.sendSubscription.unsubscribe();
      this.errorSubscription.unsubscribe();
    }
  }

}
