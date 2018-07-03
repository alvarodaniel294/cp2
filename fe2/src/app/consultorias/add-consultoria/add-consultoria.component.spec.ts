import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultoriaComponent } from './add-consultoria.component';

describe('AddConsultoriaComponent', () => {
  let component: AddConsultoriaComponent;
  let fixture: ComponentFixture<AddConsultoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsultoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
