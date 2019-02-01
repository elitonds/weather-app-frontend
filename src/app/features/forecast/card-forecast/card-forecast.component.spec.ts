import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForecastComponent } from './card-forecast.component';

describe('CardForecastComponent', () => {
  let component: CardForecastComponent;
  let fixture: ComponentFixture<CardForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
