import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsdisplayComponent } from './gifsdisplay.component';

describe('GifsdisplayComponent', () => {
  let component: GifsdisplayComponent;
  let fixture: ComponentFixture<GifsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifsdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
