import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import Stack from '@mui/material/Stack';
import { blue, green, grey, orange, purple, red } from '@mui/material/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { IconButton, InputBase } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InventoryIcon from '@mui/icons-material/Inventory';
import TabsFax from '../tabs/component';

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
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container>
                            <Grid item xs={6} md={6} display='flex'>
                                <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
                                <Typography variant="h8" noWrap component="div" className=''>
                                    Customer
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <ExpandMoreIcon />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Grid container sx={{ flexGrow: 1, p: 1 }}>
                            <Grid item xs={6} md={6} display='flex'>
                                <Avatar sx={{ width: 30, height: 30}}/>
                                <Typography noWrap component="div" className='name-avatar'>
                                    Allan Rey Palban
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <Stack direction="row" spacing={3}>
                                    <MailOutlineIcon sx={{ color:green[800], fontSize:20 }} />
                                    <MobileFriendlyIcon sx={{ color:orange[800], fontSize:20 }} />
                                    <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ flexGrow: 1, p: 1 }}>
                            <Grid item xs={6} md={6} display='flex'>
                                <Avatar sx={{ width: 30, height: 30}}/>
                                <Typography noWrap component="div" className='name-avatar'>
                                    Allan Rey Palban
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <Stack direction="row" spacing={3}>
                                    <MailOutlineIcon sx={{ color:green[800], fontSize:20 }} />
                                    <MobileFriendlyIcon sx={{ color:orange[800], fontSize:20 }} />
                                    <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Paper
                            component="form"
                            sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 450 }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Type or click to add an user"
                                inputProps={{ 'aria-label': 'Type or click to add an user' }}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton sx={{ p: '10px', color:grey[500] }} aria-label="PersonOutline">
                                <PersonOutlineIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    <Divider />
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} display='flex'>
                                <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
                                <Typography variant="h8" noWrap component="div" className=''>
                                    Assigned Rep.
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <ExpandMoreIcon />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Grid container>
                            <Box borderRadius={5} sx={{ flexGrow: 1, p: 1, background:orange[500] }} display='flex'>
                                <Grid item xs={6} md={6} display='flex'>
                                    <Avatar sx={{ width: 30, height: 30}}/>
                                    <Typography variant="h8" noWrap component="div" className='name-avatar'>
                                        Allan Rey Palban
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                    <Stack direction="row" spacing={3}>
                                        <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container sx={{ flexGrow: 1, p: 1 }}>
                            <Grid item xs={6} md={6} display='flex'>
                                <Avatar sx={{ width: 30, height: 30}}/>
                                <Typography variant="h8" noWrap component="div" className='name-avatar'>
                                    MSM
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <Stack direction="row" spacing={3}>
                                    <MailOutlineIcon sx={{ color:green[800], fontSize:20 }} />
                                    <ChatBubbleOutlineIcon sx={{ color:purple[800], fontSize:20 }} />
                                    <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Paper
                            component="form"
                            sx={{  display: 'flex', alignItems: 'center', width: 450 }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Type or click to add an user"
                                inputProps={{ 'aria-label': 'Type or click to add an user' }}
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton sx={{ p: '10px', color:grey[500] }} aria-label="PersonOutline">
                                <PersonOutlineIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    <Divider />
                    <Box sx={{ flexGrow: 1, p: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} display='flex'>
                                <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
                                <Typography variant="h8" noWrap component="div" className=''>
                                    Attachments
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                <ExpandMoreIcon />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ flexGrow: 1, p: 1 }}>
                        <Grid container sx={{ flexGrow: 1, p: 1 }}>
                            <Box borderRadius={2} sx={{ flexGrow: 1, p: 1, background:grey[100] }} display='flex'>
                                <Grid item xs={6} md={6} display='flex'>
                                    <DescriptionIcon sx={{ color:blue[500], fontSize:40 }}/>
                                    <Box>
                                    <Typography  noWrap component="div" className='name-doc'>
                                        sample_list.txt
                                    </Typography>
                                    <Typography noWrap component="div" className='time-upload'>
                                        (18.94 KB) 2019/11/02 12:00:12
                                    </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                    <Stack direction="row" spacing={2}>
                                        <SaveAltIcon sx={{ color:blue[500], fontSize:20 }} />
                                        <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid container sx={{ flexGrow: 1, p: 1 }}>
                            <Box borderRadius={2} sx={{ flexGrow: 1, p: 1, background:grey[100] }} display='flex'>
                                <Grid item xs={6} md={6} display='flex'>
                                    <DescriptionIcon sx={{ color:blue[500], fontSize:40 }}/>
                                    <Box>
                                    <Typography  noWrap component="div" className='name-doc'>
                                        sample_list.txt
                                    </Typography>
                                    <Typography noWrap component="div" className='time-upload'>
                                        (18.94 KB) 2019/11/02 12:00:12
                                    </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                    <Stack direction="row" spacing={2}>
                                        <SaveAltIcon sx={{ color:blue[500], fontSize:20 }} />
                                        <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Grid>
                        <Box borderRadius={2} sx={{ flexGrow: 1, p: 1, background:grey[100], border: '1px dashed grey' }} className='drag-drop-file'>
                            <CloudUploadIcon sx={{ color:grey[500], fontSize:30 }} />
                            <Typography noWrap component="div" className='upload-file'>
                                Drag & Drop Files
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1, p: 1 }} display='flex'>
                            <FolderZipIcon sx={{ color:blue[500], fontSize:20 }} />
                            <Typography noWrap component="div" className='download-file'>
                                Download all
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ flexGrow: 1, p: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6} display='flex'>
                                    <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
                                    <Typography variant="h8" noWrap component="div" className=''>
                                        Product
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                    <ExpandMoreIcon />
                                </Grid>
                            </Grid>
                            <Grid container sx={{ flexGrow: 1, p: 1 }}>
                                <Grid item xs={6} md={6} display='flex'>
                                    <Typography noWrap component="div" className='name-product'>
                                        Woman Peacoat
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} md={6} className='viewbody-icon-right'>
                                    <Stack direction="row" spacing={3}>
                                        <CloseIcon sx={{ color:red[500], fontSize:20 }}/>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Paper
                                component="form"
                                sx={{  display: 'flex', alignItems: 'center', width: 450 }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Type or click to add a product"
                                    inputProps={{ 'aria-label': 'Type or click to add a product' }}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <IconButton sx={{ p: '10px', color:grey[500] }} aria-label="PersonOutline">
                                    <InventoryIcon />
                                </IconButton>
                            </Paper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}