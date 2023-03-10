import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleModalsComponent } from './multiple-modals.component';

describe('MultipleModalsComponent', () => {
  let component: MultipleModalsComponent;
  let fixture: ComponentFixture<MultipleModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleModalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
