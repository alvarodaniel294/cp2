import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrProgramasComponent } from './cmr-programas.component';

describe('CmrProgramasComponent', () => {
  let component: CmrProgramasComponent;
  let fixture: ComponentFixture<CmrProgramasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrProgramasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
