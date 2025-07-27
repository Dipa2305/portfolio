import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ background: '#112240', color: '#ccc', textAlign: 'center', py: 2 }}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Dipali Kunde. All Rights Reserved.
    </Typography>
  </Box>
);

export default Footer;
