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

// Tipos de Permissoes que podem ser aplicadas no Banco de Dados do FireBase

/*
//Somente Usuários autenticados podem ler ou modificar:
        service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
            allow read, write: if request.auth != null;
            }
        }
        }


//​Somente os donos do conteúdo podem ler ou modificar:
        service cloud.firestore {
        match /databases/{database}/documents {
            // Allow only authenticated content owners access
            match /some_collection/{userId}/{documents=**} {
            allow read, write: if request.auth != null && request.auth.uid == userId
            }
        }
        }


//Todos podem ler mas apenas os donos do conteúdo podem modificar:

        service cloud.firestore {
        match /databases/{database}/documents {
            // Allow public read access, but only content owners can write
            match /some_collection/{document} {
            allow read: if true
            allow create: if request.auth.uid == request.resource.data.author_uid;
            allow update, delete: if request.auth.uid == resource.data.author_uid;
            }
        }
        }


//Permissão baseada no papel do usuário:

        service cloud.firestore {
        match /databases/{database}/documents {
            // For attribute-based access control, Check a boolean `admin` attribute
            allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true;
            allow read: true;

            // Alterntatively, for role-based access, assign specific roles to users
            match /some_collection/{document} {
            allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Reader"
            allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "Writer"
        }
        }
        }


*/

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
function login(){

    let userEmail = "teste@teste.com";
    let userPassword = "123abc";

    // Podemos modificar o estado de persistencia do usuario
    // Podemos usar 3 opçoes:auth.setPersistence(firebase.auth.Auth.Persistence."TemosTresTipos")
    // LOCAL: O padrão.persistindo no brawser em todas e qualquer janelas 
    // SESSION: Persiste apenas na aba/janela que logamos,nas outras ele n estara logado
    // NONE: nao persiste em nenhuma aba,no momento que atualizarmos a pagina ele nao estara logado
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=> {
        auth.signInWithEmailAndPassword(userEmail,userPassword)
            .then(loggedUser => {
                console.log(loggedUser);
                // console.log(currentUser); com o currentUser a gente acessa o usuario q esta logado
            }).catch(error => {
                console.log(error)
            }).catch(error => {
                console.log(error)
            })
    })
}
login();


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
// setTimeout(login,2000);
// setTimeout(logout,2000);