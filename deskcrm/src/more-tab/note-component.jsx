import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import { Box, Button, Chip, Divider, Grid } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { blue, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Stack } from '@mui/system';
import TimelineDot from '@mui/lab/TimelineDot';


export default function Note() {
  return (
    <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        
        <TimelineItem>
            <TimelineSeparator>
              <Avatar />
              <TimelineConnector sx={{ bgcolor: 'black.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Box borderRadius={2} sx={{ flexGrow: 1, border: '1px solid grey' }}>
                  <Box sx={{ p: 2 }} display='flex'>
                    <Grid item xs={9} display='flex'>
                        <Typography noWrap component="div" className=''>
                          MSR
                        </Typography>
                        <AccessTimeIcon  sx={{ mr: 1, ml: 1 }}/>
                        <Typography noWrap component="div" className=''>
                          13:00
                        </Typography>
                    </Grid>
                    <Grid item xs={3} display='flex' justifyContent='end'>
                        <CreateIcon sx={{ mr: 1, color: blue[500] }}/>
                        <CloseIcon sx={{ color: red[500] }} />
                    </Grid>
                  </Box>
                  <Divider />
                  <Box sx={{ p: 2 }}>
                    <Stack direction="column" spacing={1}>
                      <Typography noWrap component="div" className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Typography>
                      <Box sx={{ flexGrow: 1 }} display='flex'>
                        <AttachFileIcon />
                        <Typography noWrap component="div" className='' sx={{ color: blue[500] }}>
                          abc.doc
                        </Typography>
                      </Box>
                      <Box sx={{ flexGrow: 1 }} display='flex'>
                        <AttachFileIcon />
                        <Typography noWrap component="div" className='' sx={{ color: blue[500] }}>
                          def.doc
                        </Typography>
                      </Box>
                    </Stack>  
                  </Box>
                </Box>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
              <Avatar />
              <TimelineConnector sx={{ bgcolor: 'black.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Box borderRadius={2} sx={{ flexGrow: 1, border: '1px solid grey' }}>
                <Box sx={{ p: 2 }} display='flex'>
                  <Grid item xs={9} display='flex'>
                      <Typography noWrap component="div" className=''>
                        MSR
                      </Typography>
                      <AccessTimeIcon  sx={{ mr: 1, ml: 1 }}/>
                      <Typography noWrap component="div" className=''>
                        13:00
                      </Typography>
                  </Grid>
                  <Grid item xs={3} display='flex' justifyContent='end'>
                      <CreateIcon sx={{ mr: 1, color: blue[500] }}/>
                      <CloseIcon sx={{ color: red[500] }} />
                  </Grid>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                  <Stack direction="column" spacing={1}>
                    <Typography noWrap component="div" className=''>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} display='flex'>
                      <AttachFileIcon />
                      <Typography noWrap component="div" className='' sx={{ color: blue[500] }}>
                        abc.doc
                      </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} display='flex'>
                      <AttachFileIcon />
                      <Typography noWrap component="div" className='' sx={{ color: blue[500] }}>
                        def.doc
                      </Typography>
                    </Box>
                  </Stack>  
                </Box>
              </Box>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  );
}