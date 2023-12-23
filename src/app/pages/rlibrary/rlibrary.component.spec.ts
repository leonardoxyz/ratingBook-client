import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlibraryComponent } from './rlibrary.component';

describe('RlibraryComponent', () => {
  let component: RlibraryComponent;
  let fixture: ComponentFixture<RlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RlibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
