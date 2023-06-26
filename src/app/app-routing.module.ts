import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaExtratoComponent } from './tabela-extrato-component/tabela-extrato-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AgendarTransaferenciaComponent } from './agendar-transaferencia/agendar-transferencia.component';

const routes: Routes = [
  { path: 'tabela-extrato', component: TabelaExtratoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    TabelaExtratoComponent,
    AgendarTransaferenciaComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
