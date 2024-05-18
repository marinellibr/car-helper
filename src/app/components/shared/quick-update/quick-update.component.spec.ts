import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickUpdateComponent } from './quick-update.component';

describe('QuickUpdateComponent', () => {
  let component: QuickUpdateComponent;
  let fixture: ComponentFixture<QuickUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
