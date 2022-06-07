import * as React from 'react';
import './PostComments.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';


function PostComments({comments, commentEditer, commentDeleter}) {

    return (
        comments.map((comment) => {
            return (
                <div className='comment_item' key={comment.id}>
                    <div>
                        <b>{comment.email}</b>
                        <p>{comment.body}</p>
                    </div>
                    <div className='actions_container'>
                        <Fab color="orange"
                             aria-label="edit"
                             onClick={() => commentEditer(comment)}>
                            <EditIcon/>
                        </Fab>
                        <Button
                            variant="outlined"
                            startIcon={<DeleteIcon color='red'/>}
                            onClick={() => commentDeleter(comment.id)}>
                            Delete
                        </Button>
                    </div>
                </div>)
        })
    )
}

export default PostComments;