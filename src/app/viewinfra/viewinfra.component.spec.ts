import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewinfraComponent } from './viewinfra.component';

describe('ViewinfraComponent', () => {
  let component: ViewinfraComponent;
  let fixture: ComponentFixture<ViewinfraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewinfraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewinfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
