const alunos = [
    { nome: 'Jó', nota: 10 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Judas', nota: 1 },
    { nome: 'Jesus', nota: 10 },
    { nome: 'Jasef', nota: 7 },
    { nome: 'Ananias', nota: 5 },
    { nome: 'Jacó', nota: 3 },
    { nome: 'Lilica', nota: 6 },
]

const alunosAprovados = (listaDeAlunos) => {
    return listaDeAlunos.filter(aluno => aluno.nota >=6);
};

const aprovados = alunosAprovados(alunos);
console.log(aprovados);

