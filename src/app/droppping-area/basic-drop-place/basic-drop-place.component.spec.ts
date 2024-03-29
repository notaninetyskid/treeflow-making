import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDropPlaceComponent } from './basic-drop-place.component';

describe('BasicDropPlaceComponent', () => {
  let component: BasicDropPlaceComponent;
  let fixture: ComponentFixture<BasicDropPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDropPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDropPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
