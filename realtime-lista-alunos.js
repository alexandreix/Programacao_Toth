var tabela = document.getElementById('table-alunos');

firebase.database().ref('alunos').on('value', function(snapshot){
    //Percorre cada linha da tabela alunos
    snapshot.forEach(function(item){
        //Cria a linha com a informação do aluno
        var linha = document.createElement('tr');
        //Cria a primeira coluna com o nome
        var tdNome = document.createElement('td');
        //Coluna nome
        //item.val().nome = valor do campo 'nome' no banco de dados
        tdNome.appendChild(document.createTextNode(item.val().nome));
        linha.appendChild(tdNome);
        

        //Coluna status
        var tdStatus = document.createElement('td');
        //Coluna status
        //item.val().status = valor do campo 'status' no banco de dados
        tdStatus.appendChild(document.createTextNode(item.val().situacao));
        linha.appendChild(tdStatus);
        tabela.appendChild(linha);



//--------------------------------Botão Excluir------------------------------ 
        
        var excluir = document.createElement("BUTTON");
        excluir.innerHTML = 'Excluir';
        linha.appendChild(excluir);
        tabela.appendChild(linha);

        excluir.onclick = function () {
    var sim=confirm("Deseja realmente excluir o aluno?");
      if (sim==true)
     {
          console.log(item.val().cpf);
          firebase.database().ref('alunos/'+item.val().cpf).remove();
      }

  }
    

        
        

        
//--------------------------------Botão Editar------------------------------
        var editar     = document.createElement("BUTTON");
        editar.innerHTML = 'Editar';
        
        linha.appendChild(editar);
        tabela.appendChild(linha);

      //  editar.addEventListener("click", function (){
        //    document.querySelector(".sidebar").classList.toggle("show-menu");
      //  });
   
    });

});
