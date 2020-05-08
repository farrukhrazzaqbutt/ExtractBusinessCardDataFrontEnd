import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScannerListComponent } from './card-scanner-list.component';

describe('CardScannerListComponent', () => {
  let component: CardScannerListComponent;
  let fixture: ComponentFixture<CardScannerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardScannerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardScannerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
