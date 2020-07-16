import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperContainerComponent } from './wallpaper-container.component';

describe('WallpaperContainerComponent', () => {
  let component: WallpaperContainerComponent;
  let fixture: ComponentFixture<WallpaperContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallpaperContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
