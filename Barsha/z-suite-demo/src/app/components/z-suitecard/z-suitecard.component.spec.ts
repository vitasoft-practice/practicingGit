import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZSuitecardComponent } from './z-suitecard.component';

describe('ZSuitecardComponent', () => {
  let component: ZSuitecardComponent;
  let fixture: ComponentFixture<ZSuitecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZSuitecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZSuitecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
