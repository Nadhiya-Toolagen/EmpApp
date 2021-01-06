import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailComponentComponent } from './emp-detail-component.component';

describe('EmpDetailComponentComponent', () => {
  let component: EmpDetailComponentComponent;
  let fixture: ComponentFixture<EmpDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
