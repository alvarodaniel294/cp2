import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTallerComponent } from './add-new-taller.component';

describe('AddNewTallerComponent', () => {
  let component: AddNewTallerComponent;
  let fixture: ComponentFixture<AddNewTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
