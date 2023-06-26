import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaExtratoComponentComponent } from './tabela-extrato-component.component';

describe('TabelaExtratoComponentComponent', () => {
  let component: TabelaExtratoComponentComponent;
  let fixture: ComponentFixture<TabelaExtratoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaExtratoComponentComponent]
    });
    fixture = TestBed.createComponent(TabelaExtratoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
