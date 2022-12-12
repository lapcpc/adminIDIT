
import { auth, db } from "./firebase";
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import {   query, doc, getDoc, setDoc, getDocs,onSnapshot, collection, where, updateDoc, serverTimestamp, orderBy, deleteDoc} from "firebase/firestore";

import { async } from "@firebase/util";
import { Timestamp } from "firebase/firestore";
import { limit } from "firebase/firestore";

export const addCategoria = async(diccionario) =>{
    await setDoc(doc(db, "Areas", diccionario.nombre ), diccionario);

}
export const addMaquina = async(diccionario, area) =>{
    let isobasa = "maquinas" + area
    await setDoc(doc(db, isobasa, diccionario.nombre ), diccionario);

}
export const updateMaquina = async(diccionario, area) =>{
    console.log(area)
    let isobasa = "maquinas" + area
   

    console.log(diccionario)
const washingtonRef = doc(db, isobasa, diccionario.nombre);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, diccionario);


}
export const getMaquinasCategoria= async(categoria) =>{
    console.log(categoria)
    const isobasa = "maquinas" + categoria
    console.log(isobasa)
    const q = query(collection(db, isobasa));
    const querySnapshot = await getDocs(q);
    const cities = [];
    /*
    console.log("---")
    console.log(querySnapshot)
    console.log("---")
    */
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      cities.push(doc.data())
    });
    console.log(cities)
    return cities
   }