import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function Loading() {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row" className='loading'>
            <CircularProgress disableShrink />;
        </Stack>
    )
}
