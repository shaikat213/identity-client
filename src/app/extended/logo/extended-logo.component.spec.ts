import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedLogoComponent } from './extended-logo.component';

describe('extendedLogoComponent', () => {
  let component: ExtendedLogoComponent;
  let fixture: ComponentFixture<ExtendedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
