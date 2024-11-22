import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdentitycardComponent } from './create-identitycard.component';

describe('CreateIdentitycardComponent', () => {
  let component: CreateIdentitycardComponent;
  let fixture: ComponentFixture<CreateIdentitycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIdentitycardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIdentitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
