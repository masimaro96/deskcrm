import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';
import { Box, Grid } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { blue } from '@mui/material/colors';


export default function CustomizedTimeline() {
  return (
    <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot variant="outlined" className='bt-timeline'>
                    <CreateIcon className='bt-icon-timeline' />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'black.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Box borderRadius={2} sx={{ flexGrow: 1, p: 2, border: '1px solid grey' }} display='flex'>
                    <Grid item xs={9}>
                        <Typography noWrap component="div" className=''>
                            Expected Duration was updated from 1 hour to 1 day by MSR
                        </Typography>
                    </Grid>
                    <Grid item xs={3} display='flex' justifyContent='end'>
                        <Typography noWrap component="div" className=''>
                            15:28
                        </Typography>
                    </Grid>
                </Box>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className='bt-timeline' variant="outlined">
                    <ChatBubbleOutlineIcon className='bt-icon-timeline' />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'black.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Box borderRadius={2} sx={{ flexGrow: 1, p: 2, border: '1px solid grey' }} display='flex'>
                    <Grid item xs={9}>
                        <Typography noWrap component="div" className=''>
                            Expected Duration was updated from 1 hour to 1 day by MSR
                        </Typography>
                    </Grid>
                    <Grid item xs={3} display='flex' justifyContent='end'>
                        <Typography noWrap component="div" className=''>
                            09:42
                        </Typography>
                    </Grid>
                </Box>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot className='bt-timeline' variant="outlined">
                    <AttachFileIcon className='bt-icon-timeline' />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'black.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Box borderRadius={2} sx={{ flexGrow: 1, p: 2, border: '1px solid grey' }}>
                    <Box display='flex'>
                        <Grid item xs={9}>
                            <Typography noWrap component="div" className=''>
                                KDH noted " The demo location is changed. "
                            </Typography>
                        </Grid>
                        <Grid item xs={3} display='flex' justifyContent='end'>
                            <Typography noWrap component="div" className=''>
                                10:00
                            </Typography>
                        </Grid>
                    </Box>
                    <Box display='flex' justifyContent='end'>
                        <SaveAltIcon sx={{ color: blue[400] }}/>
                        <Typography noWrap component="div" className='bt-download-timline'>
                            Download
                        </Typography>
                    </Box>
                </Box>
                
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  );
}