import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultoriaComponent } from './edit-consultoria.component';

describe('EditConsultoriaComponent', () => {
  let component: EditConsultoriaComponent;
  let fixture: ComponentFixture<EditConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
