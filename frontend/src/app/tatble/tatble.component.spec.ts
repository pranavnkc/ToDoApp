import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatbleComponent } from './tatble.component';

describe('TatbleComponent', () => {
  let component: TatbleComponent;
  let fixture: ComponentFixture<TatbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
