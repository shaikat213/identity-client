import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedRolesComponent } from './extended-roles.component';

describe('ExtendedRolesComponent', () => {
  let component: ExtendedRolesComponent;
  let fixture: ComponentFixture<ExtendedRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
