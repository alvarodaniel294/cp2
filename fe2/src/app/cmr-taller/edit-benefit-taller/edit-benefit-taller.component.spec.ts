import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenefitTallerComponent } from './edit-benefit-taller.component';

describe('EditBenefitTallerComponent', () => {
  let component: EditBenefitTallerComponent;
  let fixture: ComponentFixture<EditBenefitTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBenefitTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenefitTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
