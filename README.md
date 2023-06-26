# Projeto front-end teste para a Tokio Marine

Projeto feito em Angular 16.1.1, divido em componentes sendo eles: 
1. Agendar Transferencia
2. Extrato

### 1 - Agendar Transferencia
O componente é responsavel por receber o input dos dados "Conta Origem", "Conta Destino", "Data de transferência" e "Valor", realizar o tratamento montar um arquivo JSON e fazer uma requisição POST para o back-end.

### 2 - Extrato
O componente é responsavel por fazer uma requisição GET no back-end para obter os dados de "Id,", "Conta Origem", "Conta Destino", "Data de transferência", "Valor" e  "taxa" e exibilos em uma tabela criada através do Angular Material.

### Como executar o projeto

- Clique no botão "Code" (ou "Código") na parte superior direita da página. Isso abrirá um menu suspenso.
- No menu suspenso, clique no ícone de "cópia" ao lado do URL do repositório para copiá-lo para a área de transferência.
- Abra o terminal (no caso do Windows, utilize o Git Bash) no seu computador.
- Navegue até o diretório onde deseja clonar o projeto. Você pode usar o comando cd seguido do caminho do diretório para navegar até ele.
- E digite no terminal `git clone https://github.com/rafaelssilva306/tokio-marine-front.git`.
- No terminal digite o código `npm install` para instalar as dependencias do projeto (certifique-se de ter o Node.JS instalado).
- Após instalar as dependencias você pode executar o projeto com o comando `ng serve` ou `ng s`
- O projeto executará na porta `http://localhost:4200/`
- Na tela inicial já será exibida a tabela com alguns dados já inseridos e ao lado direito o form para agendamento de transferencia, após o preenchimento a pagina será atualizada sozinha para exibir o resultado na tabela.

  
