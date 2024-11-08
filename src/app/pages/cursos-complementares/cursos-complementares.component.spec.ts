import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComplementaresComponent } from './cursos-complementares.component';

describe('CursosComplementaresComponent', () => {
  let component: CursosComplementaresComponent;
  let fixture: ComponentFixture<CursosComplementaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosComplementaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
