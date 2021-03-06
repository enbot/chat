import { Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EventService } from 'src/app/core/services/event.service';
import { ScreenEvent } from './shared/interfaces/screen-events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private configs = {
    appLocale: 'en',
    appName: 'Enbot chat',
    appTitle: 'Talk to me! Beep boop.',
    appAuthor: 'Nathan Botelho',
    appDescription: 'My name is enbot. I am a robot that, through machine learning, learns and build opinions about the conversation.',
    appImage: '/assets/images/head.png',
    appImageWidth: '1246',
    appImageHeight: '976',
    appKeywords: [
      'enbot',
      'chat',
      'emotion',
      'learning',
      'machine-learning',
      'supervised-learning',
    ],
  };

  constructor(
    private eventService: EventService,
    private meta: Meta,
    private title: Title,
  ) {

  }

  public ngOnInit(): void {
    this.title.setTitle(this.configs.appTitle);
    this.meta.addTags([
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: this.configs.appKeywords.join(', ') },
      { name: 'author', content: this.configs.appAuthor },
      { name: 'description', content: this.configs.appDescription },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: this.configs.appTitle },
      { property: 'og:site_name', content: this.configs.appName },
      { property: 'og:description', content: this.configs.appDescription },
      { property: 'og:url', content: '{{site.url}}' },
      { property: 'og:image', content: this.configs.appImage },
      { property: 'og:image:secure_url', content: this.configs.appImage },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: this.configs.appImageWidth },
      { property: 'og:image:height', content: this.configs.appImageHeight },
      { property: 'og:locale', content: this.configs.appLocale },
    ]);
  }

  @HostListener('window:mousemove', ['$event']) handleMousemove(event: MouseEvent): void {
    this.eventService.inputMouseMove(event);
  }

  @HostListener('window:resize', ['$event']) resizeHandler(event: ScreenEvent): void {
    this.eventService.inputScreenResize(event);
  }

}
