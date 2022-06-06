import * as React from 'react';
import './AddOrEditCmnt.css'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

function AddOrEditCmnt({activeComment,commentValue,handleChange,addOrEditComment}) {
    return (
        <div className='cmnt_add_edit_container' >
            <div>
              {activeComment?.id && <b>{activeComment.email}</b>}
            </div><br/>
            <CssTextField
                label='write comment'
                id="custom-css-outlined-input"
                value={commentValue}
                onChange={e => handleChange(e)}
            />
            <Button
                variant="contained"
                onClick={() => addOrEditComment()}>
                {activeComment?.id ? 'Edit ' : 'Add '}
            </Button>
        </div>
    );
}

export default AddOrEditCmnt;