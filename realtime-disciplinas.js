//form disciplinas ----------------------------------------->
var nome = document.getElementById('nome');
var cargaHoraria = document.getElementById('cargaHoraria');
var preRequisito = document.getElementById('preRequisito');
var ementa = document.getElementById('ementa');
var criterioAva = document.getElementById('criterioAva');
var obs = document.getElementById('obs');
var salvar = document.getElementById('salvar');

salvar.addEventListener('click', function() {
    console.log("clicou em salvar");
    create(nome.value, cargaHoraria.value, preRequisito.value, ementa.value,
        criterioAva.value, obs.value);
});


//Esse metodo retorna falso se o campo informado estiver vazio, e verdadeiro, caso contrário
function verificaCampoObrigatorio(nomeCampo){
    var campo = document.getElementById(nomeCampo);
    if (campo.value.length == 0){
        //cria uma mesnagem de alerta para o campo que está faltando
        var mensagemAlerta = "O campo " + nomeCampo + " é obrigatório!";
        alert( mensagemAlerta);
        campo.focus();
        return false;
    }else{
        return true;
    }
}

function create(nome, cargaHoraria, preRequisito, ementa, criterioAva, obs){
    console.log("função create");

    if(!verificaCampoObrigatorio("nome"))
    return false;
    if(!verificaCampoObrigatorio("ementa"))
    return false;
    if(!verificaCampoObrigatorio("cargaHoraria"))
    return false;
    else
    alert("Disciplina Salva!")

    var data = {
        'nome':nome,
        'cargaHoraria':cargaHoraria,
        'preRequisito':preRequisito,
        'ementa':ementa,
        'criterioAva':criterioAva,
        'obs':obs
 };

    return firebase.database().ref().child('disciplinas').push(data);
}

var selecaoDisciplinas = document.getElementById('preRequisito');

firebase.database().ref('disciplinas').on('value', function(snapshot){
    
    snapshot.forEach(function(item){
     
      
            var option=document.createElement('option');
            option.appendChild(document.createTextNode(item.val().nome));  
            selecaoDisciplinas.appendChild(option);  
        


        
    });
});
