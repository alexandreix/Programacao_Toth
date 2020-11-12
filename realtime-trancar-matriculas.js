var selecaoAluno = document.getElementById('selecioneAluno');

firebase.database().ref('alunos').on('value', function(snapshot){
    
    snapshot.forEach(function(item){
     
        if(item.val().situacao=="cursando"){
            var option=document.createElement('option');
            option.appendChild(document.createTextNode(item.val().nome));  
            selecaoAluno.appendChild(option);  
        }


        
    });
});
