//form alunos------------------------------------->
var nome = document.getElementById('nome');
var celular = document.getElementById('celular');
var dataNasc = document.getElementById('dataNasc');
var genero = document.getElementById('genero');
var escolaridade = document.getElementById('escolaridade');
var rg = document.getElementById('rg');
var titulo = document.getElementById('titulo');
var cpf = document.getElementById('cpf');
var pai = document.getElementById('pai');
var mae = document.getElementById('mae');
var responsavel = document.getElementById('responsavel');
var telResponsavel = document.getElementById('telResponsavel');
var endereco = document.getElementById('endereco');
var bairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');
var uf = document.getElementById('UF');
var cep = document.getElementById('cep');
var obs = document.getElementById('obs');
var situacao = document.getElementById('situacao');
var salvar = document.getElementById('salvar');

salvar.addEventListener('click', function() {
    console.log("clicou em salvar");
    create(nome.value, celular.value, dataNasc.value, genero.value, escolaridade.value, rg.value, 
        titulo.value, cpf.value, pai.value, mae.value, responsavel.value, telResponsavel.value,
        endereco.value, bairro.value, cidade.value, uf.value, cep.value, obs.value, situacao.value);
        
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


function create(nome, celular, dataNasc, genero, escolaridade, rg, titulo, cpf, pai, mae, responsavel,
    telResponsavel, endereco, bairro, cidade, uf, cep, obs, situacao){
        console.log("função create");
       
        if(!verificaCampoObrigatorio("nome"))
        return false;
        if(!verificaCampoObrigatorio("dataNasc"))
        return false;
        if(!verificaCampoObrigatorio("endereco"))
        return false;
        if(!verificaCampoObrigatorio("bairro"))
        return false;
        if(!verificaCampoObrigatorio("cpf"))
        return false;
        if(!verificaCampoObrigatorio("situacao"))
        return false;
        else
        alert("Aluno Salvo!");

       
      
        var data = {
            'nome':nome,
            'celular':celular,
            'dataNasc':dataNasc,
            'genero':genero,
            'escolaridade':escolaridade,
            'rg':rg,
            'titulo':titulo,
            'cpf':cpf,
            'pai':pai,
            'mae':mae,
            'responsavel': responsavel,
            'telResponsavel':telResponsavel,
            'endereco':endereco,
            'bairro':bairro,
            'cidade':cidade,
            'uf':uf,
            'cep':cep,
            'obs':obs,
            'situacao':situacao

            
        };
        
        return firebase.database().ref().child('alunos').push(data);
    }


  
   // firebase.database().ref('alunos').on('value', function(snapshot){
      //  userslist.innerHTML = '';
      //  snapshot.forEach(function(item){
        //    var li = document.createElement('li');
         //   li.appendChild(document.createTextNode(item.val().name +  '  :   ' + item.val().age));
        //    userslist.appendChild(li);
       // });
   // });
  
   



