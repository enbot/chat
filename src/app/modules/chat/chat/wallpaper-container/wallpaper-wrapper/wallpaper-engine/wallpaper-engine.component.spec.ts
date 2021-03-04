import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperEngineComponent } from './wallpaper-engine.component';

describe('WallpaperEngineComponent', () => {
  let component: WallpaperEngineComponent;
  let fixture: ComponentFixture<WallpaperEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
