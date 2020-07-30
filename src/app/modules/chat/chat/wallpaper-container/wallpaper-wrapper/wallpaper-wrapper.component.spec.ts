import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperWrapperComponent } from './wallpaper-wrapper.component';

describe('WallpaperWrapperComponent', () => {
  let component: WallpaperWrapperComponent;
  let fixture: ComponentFixture<WallpaperWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
