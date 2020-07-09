import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatControllerComponent } from './components/chat-controller/chat-controller.component';
import { ChatBalloonComponent } from './components/chat-balloon/chat-balloon.component';
import { BotContainerComponent } from './components/bot-container/bot-container.component';
import { BotEyeLeftComponent } from './components/bot-container/bot-head/bot-eye-left/bot-eye-left.component';
import { BotEyeRightComponent } from './components/bot-container/bot-head/bot-eye-right/bot-eye-right.component';
import { WallpaperContainerComponent } from './components/wallpaper-container/wallpaper-container.component';
import { BotHeadComponent } from './components/bot-container/bot-head/bot-head.component';
import { BotTalkComponent } from './components/bot-container/bot-talk/bot-talk.component';

@NgModule({
  declarations: [
    BotContainerComponent,
    BotHeadComponent,
    BotEyeLeftComponent,
    BotEyeRightComponent,
    BotTalkComponent,
    ChatContainerComponent,
    ChatControllerComponent,
    ChatBalloonComponent,
    WallpaperContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BotContainerComponent,
    BotHeadComponent,
    BotEyeLeftComponent,
    BotEyeRightComponent,
    BotTalkComponent,
    ChatContainerComponent,
    ChatControllerComponent,
    ChatBalloonComponent,
    WallpaperContainerComponent,
  ]
})
export class SharedModule { }
