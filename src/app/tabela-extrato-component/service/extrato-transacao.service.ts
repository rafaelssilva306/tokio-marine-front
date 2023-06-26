import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ExtratoTransacao } from '../models/extrato-transacao.model';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  constructor(private http: HttpClient) {}

  obterExtrato(): Observable<ExtratoTransacao[]> {
    return this.http.get<ExtratoTransacao[]>('http://localhost:8080/transacao').pipe(
      map((data: any[]) => {
        return data.map(item => ({
          id: item.id,
          contaOrigem: this.formatarConta(item.contaOrigem),
          contaDestino: this.formatarConta(item.contaDestino),
          taxa: parseFloat(item.taxa.toFixed(2)),
          dataAgendamento: this.formatarData(item.dataAgendamento),
          dataTransferencia: this.formatarData(item.dataTransferencia),
          valor: item.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }));
      }),
      catchError(error => {
        console.error('Erro ao obter o extrato.', error);
        return throwError(error);
      })
    );
  }

  private formatarData(data: string): string {
    const partes = data.split('-');
    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0];
    return `${dia}/${mes}/${ano}`;
  }

  private formatarConta(conta: string): string {
    if (conta.length >= 6) {
      const primeiraParte = conta.substring(0, 6);
      const ultimaParte = conta.slice(-2);
      return `${primeiraParte}-${ultimaParte}`;
    }
    return conta;
  }
}







