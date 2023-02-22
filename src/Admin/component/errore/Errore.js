import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Errore(props) {
    console.log(props);
    return (
        <Stack spacing={2} className="errore-box">
            <Alert severity="error">{props.errMsg}</Alert>
        </Stack>
    );
}
