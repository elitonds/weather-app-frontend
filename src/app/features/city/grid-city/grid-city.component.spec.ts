import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCityComponent } from './grid-city.component';

describe('GridCityComponent', () => {
  let component: GridCityComponent;
  let fixture: ComponentFixture<GridCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
