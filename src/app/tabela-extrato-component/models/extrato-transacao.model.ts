export interface ExtratoTransacao {
    id: number;
    contaOrigem: string;
    contaDestino: string;
    taxa: number;
    dataAgendamento: string;
    dataTransferencia: string;
    valor: number;
  }