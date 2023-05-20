const QTD_MAX_ALUNOS = 2;
const alunos = [];

function solicitaNome() {
  return prompt("Digite o nome do novo aluno");
}

function exibirListaAlunos() {
  const nomes = alunos.join(", ");
  alert(
    `Lista de alunos cadastrados:
${nomes}`
  );
}

while (alunos.length < QTD_MAX_ALUNOS) {
  const desejaCadastrar = confirm("Deseja cadastrar mais alunos?");
  if (desejaCadastrar) {
    const novoAluno = solicitaNome();
    alunos.push(novoAluno);

    alert(
      "Aluno cadastrado com sucesso! Total de alunos cadastrados: " +
        alunos.length
    );
  } else {
    alert("O programa será encerrado!");
    break;
  }
}

if (alunos.length === QTD_MAX_ALUNOS) {
  alert("Limite de alunos atingido!");
}

exibirListaAlunos();
