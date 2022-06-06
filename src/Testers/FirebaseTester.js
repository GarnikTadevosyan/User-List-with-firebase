import React, {useEffect, useState} from 'react';
import {db} from "../redux/services/firebaseService/firebaseConfig";
import {collection,getDocs} from 'firebase/firestore';

function FirebaseTester(props) {

const [users,setUsers] = useState([]);
const userCollectionHref = collection(db,'users');

useEffect( () => {
   const getUsers = async () => {
         const data = await getDocs(userCollectionHref);
         setUsers( data.docs.map( (doc) => ({...doc.data(),id:doc.id}) ) );
         console.log(users);
   };
   getUsers();
},[] );

    return (
        <div>
            Hello Firebase
        </div>
    );
}

export default FirebaseTester;