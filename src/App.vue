<script setup>
import { reactive } from "vue";

const estado = reactive({
  num1: 0,
  num2: 0,
  operacao: "soma",
});

function calcular() {
  switch (estado.operacao) {
    case "soma":
      return estado.num1 + estado.num2;
    case "subtracao":
      return estado.num1 - estado.num2;
    case "multiplicacao":
      return estado.num1 * estado.num2;
    case "divisao":
      return estado.num2 !== 0 ? (estado.num1 / estado.num2).toFixed(2) : "Erro";
    default:
      return 0;
  }
}
</script>

<template>
  <div class="calc">
    <h2>Calculadora mágica</h2>

    <input type="number" placeholder="Primeiro número"
           @keyup="evento => estado.num1 = Number(evento.target.value)"><br></br>
    <input type="number" placeholder="Segundo número"
           @keyup="evento => estado.num2 = Number(evento.target.value)"><br></br>

    <select @change="evento => estado.operacao = evento.target.value">
      <option value="soma">Soma</option>
      <option value="subtracao">Subtração</option>
      <option value="multiplicacao">Multiplicação</option>
      <option value="divisao">Divisão</option>
    </select>

    <p>Resultado: {{ calcular() }}</p>
  </div>
</template>

<style scoped>
h2{
  color:aliceblue;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
.calc {
  width: 700px;
  max-width: 95%;
  margin: 50px auto;
  padding: 40px 30px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: #24d1e1;
}
input, select{
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #0336c5;
  border-radius: 5px;
  font-size: 1.2em; 
}
p{
  font-size: 1.5em;
  color: #fefefe;
  font-weight: bold;
}
</style>
