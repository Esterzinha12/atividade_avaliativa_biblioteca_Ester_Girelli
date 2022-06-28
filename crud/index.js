import { initializeApp } from "firebase/app";
const { getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    were,
    getDocs,
    getDoc,
    deleteDoc } = require('firebase/firestore/lite');



const firebaseConfig = {
    apiKey: "AIzaSyAEZPkOZlkA31CDQz_uXxMcR2CdzDt49tQ",
    authDomain: "biblioteca-eg.firebaseapp.com",
    databaseURL: "https://biblioteca-eg-default-rtdb.firebaseio.com",
    projectId: "biblioteca-eg",
    storageBucket: "biblioteca-eg.appspot.com",
    messagingSenderId: "945544664302",
    appId: "1:945544664302:web:e547f47679e1f142e04fff",
    measurementId: "G-8F7VQRL4XB"
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function salvar(nomeTabela, id, dado) {
    if (id) {
        const referenciaEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const salvarData = {
            ...dado,
            id: id
        }
        return salvarData;
    } else {
        const referenciaEntity = await addDoc(collection(db, nomeTabela), dado);
        const salvarData = {
            ...dado,
            id: referenciaEntity.id
        }
        return salvarData;
    }
}

async function buscar(nomeTabela) {
    const tabelaRef = collection(db, nomeTabela);

    const q = query(tabelaRef);

    const consulta = await getDocs(q);

    const lista = [];

    consulta.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

async function buscarId(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docInst = await getDoc(docRef);

    if (docInst.exists()) {
        return docInst.data();
    } else {
        return new Error("Não funcionou!");
    }

}

async function remover(nomeTabela, id){
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deletado`
    }
}

module.exports = {
    salvar,
    buscar,
    buscarId,
    remover
}
