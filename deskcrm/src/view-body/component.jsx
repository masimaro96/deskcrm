import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import TabsFax from '../tabs/component';
import SimpleAccordion from '../session-right/component';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function ViewBody() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container>
                <Grid xs sx={{ flexGrow: 1, p: 2 }}>
                    <Typography variant="h8" noWrap component="div" className='viewbody-title-top'>
                        Summary
                    </Typography>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Fax Schedule
                        </Typography>
                        <Typography variant="h8" noWrap component="div" className=''>
                            Schedule
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Date
                        </Typography>
                        <Typography variant="h8" noWrap component="div" className=''>
                            2022-02-01 11:00
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Priority
                        </Typography>
                        <Chip label="Normal" className='viewbody-status' />
                    </Box>
                    <Box sx={{ flexGrow: 1, pb: 5, pl: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Purpose
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, pb: 5, pl: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Description
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, pb: 5, pl: 1 }}>
                        <Typography variant="h8" noWrap component="div" className='viewbody-title'>
                            Regarding
                        </Typography>
                    </Box>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={6} sx={{ flexGrow: 1, p: 1 }}>
                    <TabsFax />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs sx={{ flexGrow: 1, pb: 1 }}>
                    <SimpleAccordion />
                </Grid>
            </Grid>
        </Box>
    );
}