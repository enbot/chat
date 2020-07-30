import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
    selector: 'app-chat-container',
    templateUrl: './chat-container.component.html',
    styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

    message: string;

    placeholder: string;

    disabled: boolean;

    constructor(private chatService: ChatService) { }

    ngOnInit(): void {
        this.message = '';
        this.placeholder = '';
        this.disabled = false;
    }

    async send(): Promise<void> {
        this.disabled = true;
        await this.chatService.input(this.message);
        this.message = '';
        this.disabled = false;
    }

    async test(command): Promise<void> {
        console.log(command);
        await this.chatService.input(command);
    }

}
