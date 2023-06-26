export class AgendarTransferenciaModel {
    id: number;
    contaOrigem: string;
    contaDestino: string;
    taxa: number;
    dataAgendamento: string;
    dataTransferencia: string;
    valor: number;

    constructor() {
      this.id = 0;
      this.contaOrigem = '';
      this.contaDestino = '';
      this.taxa = 0;
      this.dataAgendamento = '';
      this.dataTransferencia = '';
      this.valor = 0;


    }
  }

