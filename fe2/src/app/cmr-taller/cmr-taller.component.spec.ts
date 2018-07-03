import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrTallerComponent } from './cmr-taller.component';

describe('CmrTallerComponent', () => {
  let component: CmrTallerComponent;
  let fixture: ComponentFixture<CmrTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
