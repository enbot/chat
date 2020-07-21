import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';
import { WallpaperContainerComponent } from './chat/wallpaper-container/wallpaper-container.component';
import { BotContainerComponent } from './chat/bot-container/bot-container.component';
import { BotEyeLeftComponent } from './chat/bot-container/bot-head/bot-eye-left/bot-eye-left.component';
import { BotEyeRightComponent } from './chat/bot-container/bot-head/bot-eye-right/bot-eye-right.component';
import { BotHeadComponent } from './chat/bot-container/bot-head/bot-head.component';
import { BotTalkComponent } from './chat/bot-container/bot-talk/bot-talk.component';
import { BotFaceComponent } from './chat/bot-container/bot-head/bot-face/bot-face.component';
import { BotFaceSpacingComponent } from './chat/bot-container/bot-head/bot-face-spacing/bot-face-spacing.component';

@NgModule({
    declarations: [
        ChatComponent,
        BotContainerComponent,
        BotHeadComponent,
        BotEyeLeftComponent,
        BotEyeRightComponent,
        BotTalkComponent,
        ChatContainerComponent,
        WallpaperContainerComponent,
        BotFaceComponent,
        BotFaceSpacingComponent,
    ],
    imports: [
        ChatRoutingModule,
        SharedModule,
    ]
})
export class ChatModule { }
