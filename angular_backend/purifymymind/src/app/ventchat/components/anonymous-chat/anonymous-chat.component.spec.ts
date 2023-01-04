import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousChatComponent } from './anonymous-chat.component';

describe('AnonymousChatComponent', () => {
  let component: AnonymousChatComponent;
  let fixture: ComponentFixture<AnonymousChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
