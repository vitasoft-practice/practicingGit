import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestwatchComponent } from './testwatch.component';

describe('TestwatchComponent', () => {
  let component: TestwatchComponent;
  let fixture: ComponentFixture<TestwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestwatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
