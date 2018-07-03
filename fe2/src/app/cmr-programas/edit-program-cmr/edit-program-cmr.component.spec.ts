import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgramCmrComponent } from './edit-program-cmr.component';

describe('EditProgramCmrComponent', () => {
  let component: EditProgramCmrComponent;
  let fixture: ComponentFixture<EditProgramCmrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProgramCmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgramCmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
