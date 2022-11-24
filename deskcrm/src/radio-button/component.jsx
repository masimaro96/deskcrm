import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup($title1,$label1,$label2) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{$title1}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label={$label1} />
        <FormControlLabel value="male" control={<Radio />} label={$label2} />
      </RadioGroup>
    </FormControl>
  );
}