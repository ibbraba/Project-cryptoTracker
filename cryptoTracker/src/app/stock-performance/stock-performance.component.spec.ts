import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPerformanceComponent } from './stock-performance.component';

describe('StockPerformanceComponent', () => {
  let component: StockPerformanceComponent;
  let fixture: ComponentFixture<StockPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
