import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function BoxText($text1) {
    return (
        <Box>
            <Typography>{$text1}</Typography>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField fullWidth label="" id="fullWidth" />
            </Box>
        </Box>
    );
  }