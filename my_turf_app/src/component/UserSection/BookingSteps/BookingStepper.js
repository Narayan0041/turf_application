import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { colors } from '@mui/material';

const steps = [
    'Ground Detail',
    'Your Detail',
    'Completed',
];

export default function BookingStepper({step}) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} alternativeLabel >
                {steps.map((label,index) => (
                    <Step key={label}>
                        <StepLabel sx={{
                           color: index === 0 ? '#8072e6' : 'white', 
                           '&.MuiStepLabel-active': {
                               color: '#8072e6', 
                            },
                        }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}