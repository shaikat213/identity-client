import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedNavItemsComponent } from './extended-nav-items.component';

describe('ExtendedNavItemsComponent', () => {
  let component: ExtendedNavItemsComponent;
  let fixture: ComponentFixture<ExtendedNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
