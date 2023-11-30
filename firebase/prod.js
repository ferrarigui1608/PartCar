import app from "./app.js"

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore"

const db = getFirestore(app)

const dados = {

    nome: 'usuario',
    cpf: 50122230807,
    cidade: 'campinas',

};