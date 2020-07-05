import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatControllerComponent } from './components/chat-controller/chat-controller.component';
import { ChatBalloonComponent } from './components/chat-balloon/chat-balloon.component';
import { BotContainerComponent } from './components/bot-container/bot-container.component';
import { BotEyeLeftComponent } from './components/bot-eye-left/bot-eye-left.component';
import { BotEyeRightComponent } from './components/bot-eye-right/bot-eye-right.component';
import { WallpaperContainerComponent } from './components/wallpaper-container/wallpaper-container.component';

@NgModule({
  declarations: [
    ChatContainerComponent,
    ChatControllerComponent,
    ChatBalloonComponent,
    BotContainerComponent,
    BotEyeLeftComponent,
    BotEyeRightComponent,
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
    ChatContainerComponent,
    ChatControllerComponent,
    ChatBalloonComponent,
    BotContainerComponent,
    BotEyeLeftComponent,
    WallpaperContainerComponent,
    BotEyeRightComponent,
  ]
})
export class SharedModule { }
