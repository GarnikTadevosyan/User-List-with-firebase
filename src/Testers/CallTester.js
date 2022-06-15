import React, {useEffect} from "react";
import axios from "axios";
import {collection, getDocs, query, where} from "@firebase/firestore";
import {db} from "../redux/services/firebaseService/firebaseConfig";

function CallTester() {

    async function getUserPosts (userId) {
         const data = [];
         const q = query(collection(db, "posts"), where("userId", "==", userId));
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data());
         });

    }

    getUserPosts('LCxNlTC0mBcU1IOVSC43Frmvl502');
        return (
               <div>Hello from call tester</div>
        )
}

export default CallTester;