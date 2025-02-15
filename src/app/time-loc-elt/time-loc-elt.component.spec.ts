import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLocEltComponent } from './time-loc-elt.component';

describe('TimeLocEltComponent', () => {
  let component: TimeLocEltComponent;
  let fixture: ComponentFixture<TimeLocEltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLocEltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLocEltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
