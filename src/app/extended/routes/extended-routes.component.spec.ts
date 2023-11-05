import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedRoutesComponent } from './extended-routes.component';

describe('ExtendedRoutesComponent', () => {
  let component: ExtendedRoutesComponent;
  let fixture: ComponentFixture<ExtendedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
