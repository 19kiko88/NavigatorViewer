import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairToolingComponent } from './repair-tooling.component';

describe('RepairToolingComponent', () => {
  let component: RepairToolingComponent;
  let fixture: ComponentFixture<RepairToolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepairToolingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairToolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
