var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var paciente = JSON.parse(resposta);
    
            paciente.forEach(function(paciente) {
                adionaPacienteNaTabela(paciente)
            });
        }else{
            alert("Erro ao buscar os clientes");
        }
    });

    xhr.send();
    
});