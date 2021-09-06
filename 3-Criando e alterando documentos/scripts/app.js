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


//O ID vem aleatorio
/*
    const TURMA = "turmaA";

    let db = firebase.firestore();

    db.collection(TURMA).add({
        nome: "Marcos",
        sobrenome: "Santos",
        notas: {nota1: 9.6, nota2: 7.5},
    }).then((doc) => {
        console.log("Documento inserido com sucesso:", doc);
    }).catch(err => {
        console.log(err);
    })
*/


//Maneira diferente onde podemos definir o ID que sera gerado
//podemos usar o set para adicionar um novo elemento ou 
//para modificar um elemento que ja existe
//defina o id dentro do doc("ID")
//Se quiser mudar algo apenas passe o id e ira sobrescrever o elemento anterior
db.collection(TURMA).doc("AlunoNovo").set(
    {
    /* Se deixar apenas um elemento ele ira ser o unico,apagando os outros que
    antes estavam definidos nesse objeto */
        nome: "Mariana",
        sobrenome: "Oliveira",
        notas: {nota1: 8.6, notas2: 7.5},
    }
).then(() => {
    console.log("Documento inserido com sucesso");
}).catch(err => {
    console.log(err)
})

/* Para nao apagar nenhum elemento do seu objeto use o update()
o update() ira apenas atualizar e adicionar o que vc deseja,
ira preservar os elementos do objeto,adicionando mais um elemento */
db.collection(TURMA).doc("AlunoNovo").update(
    {
        //adicionar um array de lugares
        //lugares: ["Rio de janeiro", "São paulo"]

        //para adicionar novos elementos em seu array,use;
        lugares: firebase.firestore.FieIdValue.arrayUnion("Minas Gerais","Boa Vista")


        //para remover use o;  arrayRemove("")
        //lugares: firebase.firestore.FieIdValue.arrayRemove("Minas Gerais")

        //para incrementar use;  increment()
        //faltas: firebase.firestore.FieIdValue.increment(1)

    }
).then(() => {
    console.log("Documento inserido com sucesso");
}).catch(err => {
    console.log(err)
})