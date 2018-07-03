import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScopeConsultoriaComponent } from './add-scope-consultoria.component';

describe('AddScopeConsultoriaComponent', () => {
  let component: AddScopeConsultoriaComponent;
  let fixture: ComponentFixture<AddScopeConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddScopeConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScopeConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
