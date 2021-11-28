import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LutaComponent } from './luta.component';

describe('LutaComponent', () => {
  let component: LutaComponent;
  let fixture: ComponentFixture<LutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
