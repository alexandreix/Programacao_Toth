/*
Comentario Marina: Aqui não precisa adicionar essas tags <script> isso faz parte do HTML, e não do js.
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="node_modules/firebase/firebase.js"></script>*/

//<script>

  var firebaseConfig = {
    apiKey: "AIzaSyBx0kVroMnEyk9N8uPLK3I1P6ylxl5HkoM",
    authDomain: "toth-76ec7.firebaseapp.com",
    databaseURL: "https://toth-76ec7.firebaseio.com/", 
    projectId: "toth-76ec7",
    storageBucket: "toth-76ec7.appspot.com",
    messagingSenderId: "1080838073827",
    appId: "1:1080838073827:web:89359b014253b880d344d6",
    measurementId: "G-6Q4E3NFW9G"
  };
  
  //Comentario Marina: a inicialização do firebase tem que vir logo em seugida da variável firebaseConfig
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  //Comentario Marina: não precisa chamar a função firebase.analytics()
  //firebase.analytics(); 
//</script>