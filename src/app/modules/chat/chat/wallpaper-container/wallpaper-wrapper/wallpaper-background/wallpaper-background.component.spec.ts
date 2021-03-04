import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperBackgroundComponent } from './wallpaper-background.component';

describe('WallpaperBackgroundComponent', () => {
  let component: WallpaperBackgroundComponent;
  let fixture: ComponentFixture<WallpaperBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WallpaperBackgroundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
