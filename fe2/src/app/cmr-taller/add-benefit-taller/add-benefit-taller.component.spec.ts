import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenefitTallerComponent } from './add-benefit-taller.component';

describe('AddBenefitTallerComponent', () => {
  let component: AddBenefitTallerComponent;
  let fixture: ComponentFixture<AddBenefitTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBenefitTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenefitTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
