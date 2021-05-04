import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatService } from 'src/app/modules/chat/services/chat.service';
import { ChatMessage } from 'src/app/shared/models/chat/chat-message';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';
import { ChatCommand } from 'src/app/shared/interfaces/chat-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit, OnDestroy {
  @ViewChild('chat', { static: true }) chat: ElementRef;

  private receiveSubscription: Subscription;
  private sendSubscription: Subscription;
  private errorSubscription: Subscription;
  public balloons: ChatBalloon[];

  constructor(
    private chatService: ChatService,
    private commandService: CommandService,
  ) {
    this.balloons = [];
  }

  public ngOnInit(): void {
    this.sendSubscription = this.chatService.onMessage
      .subscribe((message: ChatMessage) => this.handleNewChatMessage(message));
    this.errorSubscription = this.chatService.onError
      .subscribe((error: ChatMessage) => this.handleNewChatMessage(error));
  }

  public handleNewChatMessage(message: ChatMessage): void {
    const key = this.commandService.resolveCommand('chat', message.content);
    const command = this.commandService.resolveInstance(key).instance as ChatCommand;
    this.balloons.push({ message, command, });
    this.scrollToBottom();
  }

  public scrollToBottom(): void {
    const element = this.chat.nativeElement;
    const left = 0;
    const top = element.scrollHeight;
    const behavior = 'smooth';
    setTimeout(() => element.scroll({ top, behavior, left }), 100);
  }

  public ngOnDestroy(): void {
    if (this.receiveSubscription || this.sendSubscription || this.errorSubscription) {
      this.receiveSubscription.unsubscribe();
      this.sendSubscription.unsubscribe();
      this.errorSubscription.unsubscribe();
    }
  }
}
