/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetPassowrdComponent } from './set-passowrd.component';

describe('SetPassowrdComponent', () => {
  let component: SetPassowrdComponent;
  let fixture: ComponentFixture<SetPassowrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPassowrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
