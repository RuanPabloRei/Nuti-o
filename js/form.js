var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

    var form = document.querySelector("#form-adiciona");  // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente

    var erros = validaPaciente(paciente); 

    if (erros.length >0) {
      exibeMensagensDeErro(erros);
      return;
    }

    adionaPacienteNaTabela(paciente);

    form.reset();

});

function adionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};


function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-gordura"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Preencha a área \"nome\"");
  }

  if (!validaPeso(paciente.peso)){
    erros.push("O peso está invalido!!");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("Altura é invalida");
  }

  if(paciente.gordura.length == 0){
    erros.push("Preencha a área \"Gordura\"");
  }

  if(paciente.peso.length == 0){
    erros.push("Preencha a área \"Peso\"");
  }

  if(paciente.altura.length == 0){
    erros.push("Preencha a área \"Altura\"");
  }

  return erros;
}
