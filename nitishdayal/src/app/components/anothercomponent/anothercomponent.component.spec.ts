import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherComponentComponent } from './anothercomponent.component';

describe('AnothercomponentComponent', () => {
  let component: AnotherComponentComponent;
  let fixture: ComponentFixture<AnotherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
