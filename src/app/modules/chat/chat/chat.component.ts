import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../core/services/message.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    constructor(
        private messageService: MessageService
    ) { }

    ngOnInit(): void { }

}
