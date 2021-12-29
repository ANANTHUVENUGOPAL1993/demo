import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanthuComponent } from './ananthu.component';

describe('AnanthuComponent', () => {
  let component: AnanthuComponent;
  let fixture: ComponentFixture<AnanthuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanthuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanthuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
