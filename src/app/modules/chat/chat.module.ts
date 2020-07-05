import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        ChatComponent,
    ],
    imports: [
        SharedModule,
        ChatRoutingModule,
    ]
})
export class ChatModule { }
