import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarTransaferenciaComponent } from './agendar-transferencia.component';

describe('AgendarTransaferenciaComponent', () => {
  let component: AgendarTransaferenciaComponent;
  let fixture: ComponentFixture<AgendarTransaferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarTransaferenciaComponent]
    });
    fixture = TestBed.createComponent(AgendarTransaferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
