import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropppingAreaComponent } from './droppping-area.component';

describe('DropppingAreaComponent', () => {
  let component: DropppingAreaComponent;
  let fixture: ComponentFixture<DropppingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropppingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropppingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
