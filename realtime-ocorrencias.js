//form ocorrencias ----------------------------------------->
var titulo = document.getElementById('titulo');
var nome_aluno = document.getElementById('nome_aluno');
var nome_professor = document.getElementById('nome_professor');
var turma = document.getElementById('turma');
var dt_ocorrencia = document.getElementById('dt_ocorrencia');
var hora = document.getElementById('hora');
var descricao = document.getElementById('descricao');
var salvar = document.getElementById('salvar');

salvar.addEventListener('click', function() {
    console.log("clicou em salvar");
    create(titulo.value, nome_aluno.value, nome_professor.value, turma.value, dt_ocorrencia.value,
            hora.value, descricao.value);
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

function create(titulo, nome_aluno, nome_professor, turma, dt_ocorrencia, hora, descricao){
    console.log("função create");

    if(!verificaCampoObrigatorio("titulo"))
    return false;
    if(!verificaCampoObrigatorio("dt_ocorrencia"))
    return false;
    if(!verificaCampoObrigatorio("descricao"))
    return false;
    else
       alert("Ocorrencia Salva!");

    var data = {
        'titulo':titulo,
        'nome_aluno':nome_aluno,
        'nome_professor':nome_professor,
        'turma':turma,
        'dt_ocorrencia':dt_ocorrencia,
        'hora':hora,
        'descricao':descricao
    };

    return firebase.database().ref().child('ocorrencias').push(data);
}




var selecaoAluno = document.getElementById('nome_aluno');

firebase.database().ref('alunos').on('value', function(snapshot){
    
    snapshot.forEach(function(item){
     
        if(item.val().situacao=="cursando"){
            var option=document.createElement('option');
            option.appendChild(document.createTextNode(item.val().nome));  
            selecaoAluno.appendChild(option);  
        }


        
    });
});

var selecaoProfessor = document.getElementById('nome_professor');

firebase.database().ref('professores').on('value', function(snapshot){
    
    snapshot.forEach(function(item){
     
        
            var option=document.createElement('option');
            option.appendChild(document.createTextNode(item.val().nome));  
            selecaoProfessor.appendChild(option);  
        


        
    });
});