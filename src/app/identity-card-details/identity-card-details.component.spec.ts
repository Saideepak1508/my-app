import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCardDetailsComponent } from './identity-card-details.component';

describe('IdentityCardDetailsComponent', () => {
  let component: IdentityCardDetailsComponent;
  let fixture: ComponentFixture<IdentityCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
