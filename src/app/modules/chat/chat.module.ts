import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChatContainerComponent } from './chat/chat-container/chat-container.component';
import { WallpaperContainerComponent } from './chat/wallpaper-container/wallpaper-container.component';
import { BotContainerComponent } from './chat/bot-container/bot-container.component';
import { BotWrapperComponent } from './chat/bot-container/bot-wrapper/bot-wrapper.component';
import { BotBodyComponent } from './chat/bot-container/bot-wrapper/bot-body/bot-body.component';
import { BotHeadComponent } from './chat/bot-container/bot-wrapper/bot-head/bot-head.component';
import { BotHelmetComponent } from './chat/bot-container/bot-wrapper/bot-head/bot-helmet/bot-helmet.component';
import { BotEyeLeftComponent } from './chat/bot-container/bot-wrapper/bot-head/bot-eye-left/bot-eye-left.component';
import { BotEyeRightComponent } from './chat/bot-container/bot-wrapper/bot-head/bot-eye-right/bot-eye-right.component';
import { BotEyeSpaceComponent } from './chat/bot-container/bot-wrapper/bot-head/bot-eye-space/bot-eye-space.component';

@NgModule({
    declarations: [
        ChatComponent,
        ChatContainerComponent,
        WallpaperContainerComponent,
        BotContainerComponent,
        BotWrapperComponent,
        BotBodyComponent,
        BotHeadComponent,
        BotHelmetComponent,
        BotEyeLeftComponent,
        BotEyeRightComponent,
        BotEyeSpaceComponent,
    ],
    imports: [
        ChatRoutingModule,
        SharedModule,
    ]
})
export class ChatModule { }
