var tabela = document.getElementById('table-ocorrencias');

firebase.database().ref('ocorrencias').on('value', function(snapshot){

    snapshot.forEach(function(item){
        //Cria a linha com a informação do aluno
        var linha = document.createElement('tr');
        //Cria a primeira coluna com o nome
        var tdNome = document.createElement('td');
        //Coluna nome
        //item.val().nome = valor do campo 'nome' no banco de dados
        tdNome.appendChild(document.createTextNode(item.val().titulo));
        linha.appendChild(tdNome);

        //Coluna data da ocorrencia
        var tdData = document.createElement('td');
        tdData.appendChild(document.createTextNode(item.val().dt_ocorrencia));
        linha.appendChild(tdData);
        tabela.appendChild(linha);


    });
});