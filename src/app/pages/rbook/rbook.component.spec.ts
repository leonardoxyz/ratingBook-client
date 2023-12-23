import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbookComponent } from './rbook.component';

describe('RbookComponent', () => {
  let component: RbookComponent;
  let fixture: ComponentFixture<RbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
