import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';


const Input = styled(MuiInput)`
  width: 42px;
`;

const Controller = ({textLabel}) => {
    
  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < -1) {
      setValue(-1);
    } else if (value > 1) {
      setValue(1);
    }
  };
  return (
    <>
        
      <Box sx={{ width: '100%' }}>
      <Typography id="input-slider" gutterBottom>
        {textLabel}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            style={{color: 'red'}}
            step={0.01}
            min={-1}
            max={1}
          />
        </Grid>
        <Grid item>
          <Input
            sx={{width: 50}}
            value={value}
            size="medium"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.01,
              min: -1,
              max: 1,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Controller;
