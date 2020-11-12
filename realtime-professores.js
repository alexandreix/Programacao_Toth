var userslist = document.getElementById('userslist');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
var dtNascimento = document.getElementById('dtNascimento');
var genero = document.getElementById('genero');
var celular = document.getElementById('celular');
var RG = document.getElementById('RG');
var tituloEleitor = document.getElementById('tituloEleitor');
var CPF = document.getElementById('CPF');
var pai = document.getElementById('pai');
var mae = document.getElementById('mae');
var endereco = document.getElementById('endereco');
var bairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');
var UF = document.getElementById('UF');
var cep = document.getElementById('cep');
var obs = document.getElementById('obs');
var cargaHoraria = document.getElementById('cargaHoraria');
var titulo = document.getElementById('titulo');
var turno = document.getElementById('turno');
var situacao = document.getElementById('situacao');
const salvar = document.getElementById('salvar');


salvar.addEventListener('click', function() {
    console.log("clicou em salvar");
    create(nome.value, email.value, dtNascimento.value, genero.value, celular.value, RG.value, tituloEleitor.value,
        CPF.value, pai.value, mae.value, endereco.value, bairro.value, UF.value, cep.value, obs.value, cargaHoraria.value,
        titulo.value, turno.value, situacao.value);
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

function create(nome, email, dtNascimento, genero, celular, RG, tituloEleitor, CPF, pai, mae, endereco, bairro, UF, cep, obs,
    cargaHoraria, titulo, turno, situacao ){
        console.log("função create");

        if(!verificaCampoObrigatorio("nome"))
        return false;
       // if(!verificaCampoObrigatorio("CPF"))
       // return false;
       // if(!verificaCampoObrigatorio("RG"))
       // return false;
      //  if(!verificaCampoObrigatorio("titulo"))
      //  return false;
        else
        alert("Professor Salvo!");


        var data = {
            'nome':nome,
            'dtNascimento':dtNascimento,
            'email':email,
            'genero':genero,
            'celular':celular,
            'RG':RG,
            'tiuloEleitor':tituloEleitor,
            'CPF':CPF,
            'pai':pai,
            'mae':mae,
            'endereco':endereco,
            'bairro':bairro,
            'UF':UF,
            'cep':cep,
            'obs':obs,
            'cargaHoraria':cargaHoraria,
            'titulo':titulo,
            'turno':turno,
            'situacao':situacao
        };

        return firebase.database().ref().child('professores').push(data);
    }




//firebase.database().ref('professores').on('value', function(snapshot){
 //   userslist.innerHTML = '';
  //  snapshot.forEach(function(item){
  //      var li = document.createElement('li');
    //    li.appendChild(document.createTextNode(item.val().name +  '  :   ' + item.val().age));
    //    userslist.appendChild(li);
  //  });
//});




//function situacao()  
//{  
  //  var checkboxes = document.getElementsByName("sProfessor");  
  //  var numberOfCheckedItems = 0;  
  //  for(var i = 0; i < checkboxes.length; i++)  
  //  {  
 //       if(checkboxes[i].checked)  
  //          numberOfCheckedItems++;  
  //  }  
  //  if(numberOfCheckedItems > 2)  
   // {  
   //     alert("You can't select more than two favorite pets!");  
   //     return false;  
  //  }  
//}  

