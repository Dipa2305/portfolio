import React from 'react';
import Typical from 'react-typical';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        background: '#0a192f',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight={700}>
        Hi, I'm Dipali Kunde
      </Typography>
      <Typography variant="h5" mt={2}>
        <Typical
          steps={[
            'React Developer 💻',
            1500,
            'UI Enthusiast 🎨',
            1500,
            'Problem Solver 🧠',
            1500,
          ]}
          loop={Infinity}
          wrapper="span"
        />
      </Typography>
    </Box>
  );
};

export default Header;
