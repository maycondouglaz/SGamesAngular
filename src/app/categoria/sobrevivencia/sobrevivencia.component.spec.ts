import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrevivenciaComponent } from './sobrevivencia.component';

describe('SobrevivenciaComponent', () => {
  let component: SobrevivenciaComponent;
  let fixture: ComponentFixture<SobrevivenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobrevivenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobrevivenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
