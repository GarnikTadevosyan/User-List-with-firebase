import React from 'react';
import Button from "@mui/material/Button";

function MuiButton(color,variant,type,text) {
    return (
        <Button
            color='primary'
            variant='contained'
            fullWidth
        >
            Sign up
        </Button>
    );
}

export default MuiButton;