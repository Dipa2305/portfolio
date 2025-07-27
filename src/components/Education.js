import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Element } from 'react-scroll';

const educationData = [
  {
    duration: '2016 – 2018',
    title: 'Higher Secondary Education',
    subtitle: 'Savitri Bai Phule Pune University',
  },
  {
    duration: '2018 – 2022',
    title: 'Bachelor of Engineering - Computer Engineering',
    subtitle: 'Savitri Bai Phule Pune University',
  },
];
const Education = () => {
  return (
    <Element name="education">
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          px: { xs: 2, md: 10 },
          py: { xs: 2, md: 2, mt: 2 },
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: '#1A1A1A',
                fontWeight: 'bold',
                mb: 4,
              }}
            >
              EDUCATION
            </Typography>

            <Box>
              {educationData.map((edu, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    background: '#FFFFFF',
                    color: '#1A1A1A',
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '5px',
                      height: '100%',
                      backgroundColor: '#6C63FF',
                      borderRadius: '4px 0 0 4px',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: '#F3F3F3',
                      color: '#6C63FF',
                      mt: 0.5,
                    }}
                  >
                    <SchoolIcon />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, color: '#555555' }}
                    >
                      {edu.duration}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mt: 0.5 }}
                    >
                      {edu.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {edu.subtitle}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require('../assets/education.png')}
              alt="education illustration"
              sx={{
                width: '100%',
                height: 'auto',
                mt: { xs: 2, md: 4 },
                ml: { xs: 0, md: 20 },
                display: 'block',
                objectFit: 'contain',
                maxWidth: '100%',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default Education;
