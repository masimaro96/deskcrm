import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Divider, Grid, IconButton, InputBase, Paper, Stack } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { blue, green, grey, orange, purple, red } from '@mui/material/colors';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InventoryIcon from '@mui/icons-material/Inventory';

export default function SimpleAccordion() {
    
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >   
            <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
            <Typography>Customer</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{ flexGrow: 1, p: 1 }}>
                <Box pb={2}>
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
                </Box>
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
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
            <Typography>Assigned Rep.</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ flexGrow: 1, p: 1 }}>
            <Box pb={2}>
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
            </Box>
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
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
            <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
            <Typography variant="h8" noWrap component="div" className=''>
                Attachments
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ flexGrow: 1, p: 1 }}>
            <Box pb={2}>
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
            </Box>
           
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
        </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel4a-header"
        >
            <DragIndicatorIcon sx={{ color:grey[400], fontSize:20 }} />
            <Typography>Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}