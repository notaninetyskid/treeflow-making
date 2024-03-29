import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitComponentComponent } from './split-component.component';

describe('SplitComponentComponent', () => {
  let component: SplitComponentComponent;
  let fixture: ComponentFixture<SplitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
