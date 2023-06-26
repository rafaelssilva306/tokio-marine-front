import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { AgendarTransferenciaModel } from '../model/agendar-transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class AgendarTransferenciaService {

  constructor(private http: HttpClient) {}

  agendarTransferencia(agendamento: AgendarTransferenciaModel): Observable<any> {
    const url = 'http://localhost:8080/transacao/agendarTransferencia';
    return this.http.post(url, agendamento);
  }
}
