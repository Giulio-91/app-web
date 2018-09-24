import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVoiceComponent } from './menu-voice.component';

describe('MenuVoiceComponent', () => {
  let component: MenuVoiceComponent;
  let fixture: ComponentFixture<MenuVoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
