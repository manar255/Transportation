import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFleetComponent } from './our-fleet.component';

describe('OurFleetComponent', () => {
  let component: OurFleetComponent;
  let fixture: ComponentFixture<OurFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFleetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
