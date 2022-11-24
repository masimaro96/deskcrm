import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CustomizedDialogs from '../addnew/component';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ViewHeader() {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Box sx={{display: 'flex',
                                alignItems: 'center',
                                width: 'fit-content',
                                bgcolor: 'background.paper',
                                color: 'text.secondary',
                                '& hr': {
                                    mx: 1,
                                },
                                }}>
                        <ArrowBackIcon />
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Button variant="text" endIcon={<ExpandMoreIcon />}>Activity</Button>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Typography variant="h5" noWrap component="div" className='title-viewheader-left'>
                            Fax Subject
                        </Typography>
                    </Box>
                    

                </Grid>
                <Grid item xs={6} md={8} className='bt-right'>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" className='bt-viewheader-right'>
                        Done
                    </Button>
                    <Button variant="contained" endIcon={<ExpandMoreIcon />} className='bt-viewheader-right'>
                        Move
                    </Button>
                    <CustomizedDialogs />
                </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}