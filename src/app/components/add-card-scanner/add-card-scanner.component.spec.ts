import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardScannerComponent } from './add-card-scanner.component';

describe('AddCardScannerComponent', () => {
  let component: AddCardScannerComponent;
  let fixture: ComponentFixture<AddCardScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
