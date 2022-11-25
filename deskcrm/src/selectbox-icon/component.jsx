import CancelIcon from '@mui/icons-material/Cancel';
import _without from "lodash/without";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Checkbox, IconButton, ListItemText, Typography } from '@mui/material';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


export default function MultipleSelectChip($text1) {
  const theme = useTheme();
  const initialSelected = ["April Tucker", "Ralph Hubbard"];

  
  const [personName, setPersonName] = React.useState(initialSelected);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    console.log("clicked delete");
    setPersonName((current) => _without(current, value));
  };

  return (
    <div>
        <Typography>{$text1}</Typography>
        <FormControl sx={{ m: 1, width: 500 }}>
          <Select
            labelId="demo-mutiple-chip-checkbox-label"
            id="demo-mutiple-chip-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            onOpen={() => console.log("select opened")}
            //input={<Input />}
            // MenuProps={MenuProps}
            sx={{"& .MuiSelect-iconOutlined": {display: 'none'}, "&.Mui-focused .MuiIconButton-root": {color: 'primary.main'}}}
            IconComponent={()=> <PersonOutlineIcon sx={{mr: 1}}/>}
            renderValue={(selected) => (
              <div >
                {(selected).map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    clickable
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                    
                    onDelete={(e) => handleDelete(e, value)}
                    onClick={() => console.log("clicked chip")}
                  />
                ))}
              </div>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
  );
}