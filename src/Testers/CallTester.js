import React, {useEffect} from "react";
import axios from "axios";

function CallTester() {

    useEffect( () => {

    },[] );

    const toAddComment =  {
        postId: 1,
        id: 6, //poxac
        name: 'Gevnik',
        email: 'gvenik@gvoyan.biz',
        body: 'avelacrac comment'
    };


   axios.post(`https://jsonplaceholder.typicode.com/posts/${toAddComment.postId}/comments`,toAddComment)
       .then( res => console.log(res.data));
    return (
        <div>Hello from call tester</div>
    )
}

export default CallTester;