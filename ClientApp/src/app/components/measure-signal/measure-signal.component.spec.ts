import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasureSignalComponent } from './measure-signal.component';

describe('MeasureSignalComponent', () => {
  let component: MeasureSignalComponent;
  let fixture: ComponentFixture<MeasureSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeasureSignalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeasureSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
