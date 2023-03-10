import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneModalComponent } from './one-modal.component';

describe('OneModalComponent', () => {
  let component: OneModalComponent;
  let fixture: ComponentFixture<OneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
