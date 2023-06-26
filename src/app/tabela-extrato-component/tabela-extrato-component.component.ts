import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ExtratoTransacao } from './models/extrato-transacao.model';
import { ExtratoService } from './service/extrato-transacao.service';

@Component({
  selector: 'app-tabela-extrato-component',
  templateUrl: './tabela-extrato-component.component.html',
  styleUrls: ['./tabela-extrato-component.component.css'],
  standalone: true,
  imports: [MatTableModule],
})

export class TabelaExtratoComponent implements OnInit{

  displayedColumns: string[] = ['id', 'contaOrigem', 'contaDestino', 'taxa', 'dataAgendamento', 'dataTransferencia', 'valor'];
  dataSource: ExtratoTransacao[] = [];

  constructor(private extratoService: ExtratoService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.extratoService.obterExtrato().subscribe(data => {
      this.dataSource = data;
      console.log("data: ", data);
    });
  }
}
