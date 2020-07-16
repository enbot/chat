import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatPhotoComponent } from './components/chat-photo/chat-photo.component';
import { ChatBalloonComponent } from './components/chat-balloon/chat-balloon.component';

@NgModule({
  declarations: [
    ChatBalloonComponent,
    ChatPhotoComponent,
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
    ChatBalloonComponent,
    ChatPhotoComponent,
  ]
})
export class SharedModule { }
