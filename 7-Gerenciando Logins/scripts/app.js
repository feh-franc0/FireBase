    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyDQgxqNd4JjfmrsH6rRSrM8M6FV_XNIVWQ",
        authDomain: "colegio-57810.firebaseapp.com",
        projectId: "colegio-57810",
        storageBucket: "colegio-57810.appspot.com",
        messagingSenderId: "62166828014",
        appId: "1:62166828014:web:8b831c16bcfd589ae384ff",
        measurementId: "G-RKQW6D1T5V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
///////////////////////////////////////////////////////////////////////

let db = firebase.firestore();


let auth = firebase.auth();

// function criarUsuario(){
// let newUserEmail = "novoteste@teste.com";
// let newUserPassword = "123abc";


// auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword)
//     .then(user => {
//         console.log(user);
//     }).catch(error => {
//         console.log(error);
//     })
// }


// ver usuario que esta logado
// let user = auth.currentUser;


// Logar com o Usuario
// function login(){

//     let userEmail = "novoteste@teste.com";
//     let userPassword = "123abc";

//     auth.signInWithEmailAndPassword(userEmail,userPassword)
//         .then(loggedUser => {
//             console.log(loggedUser);
//             // console.log(currentUser); com o currentUser a gente acessa o usuario q esta logado
//         }).catch(error => {
//             console.log(error)
//         })

//     let user = auth.currentUser;

//     console.log(user)

// }
// login();


//JS prepara um "OBSERVADOR" para q toda vez o usuario mudar de estado ele ddisparar o callback
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user)
    }else {
        console.log("Ninguem logado")
    }
})

//Para deslogar o usuario
function logout(){
    auth.signOut().then(() =>{
        console.log("Usuário foi deslogado")
    }).catch(error => {
        console.log(error)
    })
}

// Definir um tempo para usar a funçao,nesse caso 2s
setTimeout(logout,2000);