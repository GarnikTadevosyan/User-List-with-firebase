import React from "react";
import TextField from '@mui/material/TextField';

function MuiTextField({id,name,Label,value}) {

    const handleChange = (e) => {
          console.log(e.taregt.value)
    }

    return (
             <TextField
                 inputProps={{
                     autoComplete: 'off'
                 }}
                 fullWidth
                 id={id}
                 name={name}
                 label={Label}
                 value={'sadas'}
                 onChange={ (e) => handleChange(e) }
                 variant="standard"
                 margin="normal"
             />
         )
}
export default MuiTextField;
