import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingSupportComponent } from './marketing-support.component';

describe('MarketingSupportComponent', () => {
  let component: MarketingSupportComponent;
  let fixture: ComponentFixture<MarketingSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
