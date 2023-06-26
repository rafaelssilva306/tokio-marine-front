import { AgendarTransferenciaService } from './service/agendar-transferencia.service';
import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AgendarTransferenciaModel } from './model/agendar-transferencia.model';

@Component({
  selector: 'app-agendar-transferencia',
  templateUrl: './agendar-transferencia.component.html',
  styleUrls: ['./agendar-transferencia.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
            ReactiveFormsModule
          ],
})

export class AgendarTransaferenciaComponent implements OnInit{

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private agendamentoService: AgendarTransferenciaService) { }

  agendarTranferencia = {} as AgendarTransferenciaModel;
  agendamento: AgendarTransferenciaModel = new AgendarTransferenciaModel();

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      contaOrigem: ['', Validators.required],
      contaDestino: ['', Validators.required],
      dataTransferencia: ['', Validators.required],
      valor: ['', Validators.required]
    });
  }

  enviarAgendamento() {

    this.agendamento.contaOrigem = this.formulario.controls['contaOrigem'].value;
    this.agendamento.contaDestino = this.formulario.controls['contaDestino'].value;
    this.agendamento.dataTransferencia = this.formulario.controls['dataTransferencia'].value;
    this.agendamento.valor = this.formulario.controls['valor'].value;

    this.agendamentoService.agendarTransferencia(this.agendamento).subscribe(
      response => {
        console.log('Agendamento realizado com sucesso!', response);

        window.location.reload();
      },
      error => {
        console.error('Erro ao agendar transferência.', error);
      }
    );
  }
}
