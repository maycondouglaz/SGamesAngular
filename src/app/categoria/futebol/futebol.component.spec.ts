import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutebolComponent } from './futebol.component';

describe('FutebolComponent', () => {
  let component: FutebolComponent;
  let fixture: ComponentFixture<FutebolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutebolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutebolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
