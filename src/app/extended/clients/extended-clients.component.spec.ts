/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExtendedClientsComponent } from './extended-clients.component';

describe('ExtendedClientsComponent', () => {
  let component: ExtendedClientsComponent;
  let fixture: ComponentFixture<ExtendedClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
