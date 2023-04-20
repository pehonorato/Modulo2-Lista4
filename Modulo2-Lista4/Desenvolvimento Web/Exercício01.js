const contaCorrente = {
  saldo: 5000,
  faturaAtual: 3000,
  creditoDisponivel: 2000,
  extrato: [],
  exibirExtrato: true,
  
  registrarTransacao: function(data, valor, descricao) {
    this.extrato.push({data, valor, descricao});
  },
  
  verificarSaldoFatura: function() {
    if (this.saldo >= this.faturaAtual) {
      console.log("Você possui saldo para pagar a fatura atual");
    } else {
      console.log("Você não possui saldo suficiente para pagar a fatura. Crédito disponível: " + this.creditoDisponivel);
    }
  },
  
  imprimirExtrato: function() {
    if (this.exibirExtrato) {
      console.log("Extrato:");
      this.extrato.forEach(function(transacao) {
        console.log(transacao.data + " - R$ " + transacao.valor + " - " + transacao.descricao);
      });
    }
  }
};


contaCorrente.registrarTransacao("15/04/2023", 120.50, "Restaurante");
contaCorrente.registrarTransacao("17/04/2023", 80.00, "Cinema");
contaCorrente.registrarTransacao("19/04/2023", 220.00, "Mercado");

contaCorrente.verificarSaldoFatura();


contaCorrente.imprimirExtrato();
