import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScannerDetailsComponent } from './card-scanner-details.component';

describe('CardScannerDetailsComponent', () => {
  let component: CardScannerDetailsComponent;
  let fixture: ComponentFixture<CardScannerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardScannerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardScannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
