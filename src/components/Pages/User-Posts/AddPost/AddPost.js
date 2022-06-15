import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import moment from "moment";
import {commentActions, postActions} from "../../../../redux/actions";
import {connect} from "react-redux";

function Addpost({id,addPost}) {

    const [open, setOpen] = useState(false);
    const [titleValue,setTitleValue] = useState('');
    const [bodyValue,setBodyValue] = useState('');

    const momentDate = moment().format('YYYY-MM-DD HH:mm:ss');

    const handleClickOpen = () => {
          setOpen(true);
    };

    const handleClose = () => {
          setOpen(false);
    };

    const createPost = (id) => {
          const post = {
            title:titleValue,
                body:bodyValue,
                createdAtt:momentDate,
                userId:id
          };
          addPost(post);
          handleClose();
    };

    const handleChange = (e) => {
          let value =  e.target.value;
          if (e.target.id == 'post_title') {
              setTitleValue(value);
          }
          if (e.target.id == 'post_body') {
              setBodyValue(value);
          }
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}>
                Add post
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth>
                <DialogTitle>Add your post</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="post_title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={titleValue}
                        onChange={(e) => handleChange(e)}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="post_body"
                        label="Body"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={bodyValue}
                        onChange={(e) => handleChange(e)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => createPost(id)}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
      addPost: (post) => dispatch(postActions.addPost(post)),
});

export default connect(null, mapDispatchToProps)(Addpost);