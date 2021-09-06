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

    let db = firebase.firestore();

    /*
    //Ler todos os dados de uma coleção...
    db.collection("turmaA").get()
        .then((snapshot) =>{

            snapshot.forEach((doc) => {
                let aluno = doc.data();
                console.log(aluno.nome);
            })
        })
    */
   
    /*
   //Lê um aluno específico
   let docRef = db.collection("turmaA").doc("75qU8nFwO7Kl5fhfZxSV")
        docRef.get().then((doc) => {
            // let aluno = doc.data();
            console.log(doc.data().nome)
        })
    */

    db.collection("turmaA").where("nome","==","Fernando").get()
        .then(snapshot => {
            snapshot.forEach((doc) =>{
                let aluno = doc.data();
                console.log(aluno.nome, aluno.sobrenome)
            })
        })