import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScopeConsultoriaComponent } from './edit-scope-consultoria.component';

describe('EditScopeConsultoriaComponent', () => {
  let component: EditScopeConsultoriaComponent;
  let fixture: ComponentFixture<EditScopeConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScopeConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScopeConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
