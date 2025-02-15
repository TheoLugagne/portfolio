import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEltComponent } from './education-elt.component';

describe('EducationEltComponent', () => {
  let component: EducationEltComponent;
  let fixture: ComponentFixture<EducationEltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationEltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
