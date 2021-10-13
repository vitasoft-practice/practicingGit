import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingReturnComponent } from './marketing-return.component';

describe('MarketingReturnComponent', () => {
  let component: MarketingReturnComponent;
  let fixture: ComponentFixture<MarketingReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
