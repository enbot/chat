import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperTransitionComponent } from './wallpaper-transition.component';

describe('WallpaperTransitionComponent', () => {
  let component: WallpaperTransitionComponent;
  let fixture: ComponentFixture<WallpaperTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
