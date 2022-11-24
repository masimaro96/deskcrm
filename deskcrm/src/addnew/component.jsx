import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';
import RowRadioButtonsGroup from '../radio-button/component';
import { Stack } from '@mui/system';
import BoxText from '../box/component';
import MultipleSelectPlaceholder from '../selectbox/component';
import MultipleSelectChip from '../selectbox-icon/component';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
            New
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Create Fax
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack direction="column" spacing={2}>
            {RowRadioButtonsGroup("Fax Direction","Incoming","Outgoing")}
            {RowRadioButtonsGroup("Fax Schedule","Send Now","Schedule")}  
            {BoxText("Subject","")}
            {MultipleSelectPlaceholder("Priority","Select...")}
            {MultipleSelectPlaceholder("Purpose","Select...")}
            <MultipleSelectChip />
            {BoxText("Description","")}
          </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button autoFocus onClick={handleClose} endIcon={<KeyboardArrowUpIcon />}>
                Save
            </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}