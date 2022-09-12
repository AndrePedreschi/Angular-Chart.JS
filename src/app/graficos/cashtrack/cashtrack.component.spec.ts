import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashtrackComponent } from './cashtrack.component';

describe('CashtrackComponent', () => {
  let component: CashtrackComponent;
  let fixture: ComponentFixture<CashtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashtrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
