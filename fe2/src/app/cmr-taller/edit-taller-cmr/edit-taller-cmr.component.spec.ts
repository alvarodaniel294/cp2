import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTallerCmrComponent } from './edit-taller-cmr.component';

describe('EditTallerCmrComponent', () => {
  let component: EditTallerCmrComponent;
  let fixture: ComponentFixture<EditTallerCmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTallerCmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTallerCmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
