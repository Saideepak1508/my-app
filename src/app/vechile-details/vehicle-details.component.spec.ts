import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechioleDetailsComponent } from './vechile-details.component';

describe('VechioleDetailsComponent', () => {
  let component: VechioleDetailsComponent;
  let fixture: ComponentFixture<VechioleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechioleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechioleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
