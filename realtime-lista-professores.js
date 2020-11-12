var tabela = document.getElementById('table-professores');

firebase.database().ref('professores').on('value', function(snapshot){
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

        var tdAcao = document.createElement('td');
        //Coluna nome
        //item.val().nome = valor do campo 'nome' no banco de dados
        tdAcao.appendChild(document.createTextNode("Verificar botao"));
        linha.appendChild(tdAcao);

    });
});

