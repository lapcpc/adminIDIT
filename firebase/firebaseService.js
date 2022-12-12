
import { auth, db } from "./firebase";
import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import {   query, doc, getDoc, setDoc, getDocs,onSnapshot, collection, where, updateDoc, serverTimestamp, orderBy, deleteDoc} from "firebase/firestore";

import { async } from "@firebase/util";
import { Timestamp } from "firebase/firestore";
import { limit } from "firebase/firestore";
//Añadir una categoria
export const addCategoria = async(diccionario) =>{
    await setDoc(doc(db, "Areas", diccionario.nombre ), diccionario);

}
//Añadir una maquina
export const addMaquina = async(diccionario, area) =>{
    let isobasa = "maquinas" + area
    await setDoc(doc(db, isobasa, diccionario.nombre ), diccionario);

}
//Actualizar una marquina, recibe un diccionario con el nombre de la maquina y los nuevos datos
export const updateMaquina = async(diccionario, area) =>{
    console.log(area)
    let isobasa = "maquinas" + area
    //Ejemplo: maquinasFABLAB
   

    console.log(diccionario)
const washingtonRef = doc(db, isobasa, diccionario.nombre);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, diccionario);


}
//Obtener las maquinas de una categoria 
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