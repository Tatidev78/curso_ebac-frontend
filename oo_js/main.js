class Bolo {
  constructor(sabor, tamanho) {
    this.sabor = sabor;
    this.tamanho = tamanho;
  }

  assar() {
    console.log(`Assando um bolo de ${this.sabor}, tamanho ${this.tamanho}.`);
  }

  verDetalhes() {
    console.log(`Bolo de ${this.sabor}, tamanho ${this.tamanho}`);
  }
}

class BoloAniversario extends Bolo {
  constructor(sabor, tamanho, camadas, cobertura, corFita) {
    super(sabor, tamanho);
    this.camadas = camadas;
    this.cobertura = cobertura;
    this.corFita = corFita;
  }

  decorar() {
    console.log(`Decorando o bolo com ${this.camadas} camadas!`);
  }
  embalar() {
    console.log(`Embalando com fita colorida ${this.corFita} e cobertura de ${this.cobertura}.`);
  }

}

class BoloCafeDaTarde extends Bolo {
  constructor(sabor, tamanho, cobertura) {
    super(sabor, tamanho);
    this.cobertura = cobertura;
  }

  embalar() {
    console.log(`Embalando com Fita colorida grande.`);
  }
   decorar() {
    console.log(`Decorando o bolo de ${this.sabor} com cobertura de ${this.cobertura}!`);
  }
}

// Instâncias
const boloAniver = new BoloAniversario("prestígio", "grande", 3, "chantilly","Rosa");
const boloCaseiro = new BoloCafeDaTarde("fubá", "médio", "goiabada");
const boloCaseiro2 = new BoloCafeDaTarde("cenoura", "pequeno", "chocolate");
const boloAniver2 = new BoloAniversario("massa pao de ló", "pequeno", 2, "chantilly azul", "azul");

// Ações

boloCaseiro.assar();
boloCaseiro.decorar();
boloCaseiro.embalar();

console.log('------------------------------');

boloCaseiro2.assar();
boloCaseiro2.decorar();
boloCaseiro2.embalar();

console.log('------------------------------');

boloAniver.assar();
boloAniver.decorar();
boloAniver.embalar();

console.log('------------------------------');

boloAniver2.assar();
boloAniver2.decorar();
boloAniver2.embalar();