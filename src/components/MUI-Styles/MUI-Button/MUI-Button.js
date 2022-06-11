import React from 'react';
import Button from "@mui/material/Button";

function MuiButton(color,variant,type,text) {
    return (
        <Button
            color={color}
            variant={variant}
            fullWidth
            type={type}
        >
            Sign up
        </Button>
    );
}

export default MuiButton;