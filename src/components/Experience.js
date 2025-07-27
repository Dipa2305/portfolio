import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { Element } from 'react-scroll';

const experienceData = [
  {
    duration: 'Nov 2022 – Present',
    title: 'Software Engineer',
    company: 'Capgemini',
    responsibilities: [
      'Data Reconciliation Web App – UI Developer (React.js, Redux)',
      'Adapt – Full Stack Developer (React.js, Spring Boot)',
      'Insight Bot – UI Developer (React.js, AWS, Figma)',
    ],
  },
];

const Experience = () => {
  return (
    <Element name="experience">
      <Box
        sx={{
          bgcolor: '#FFFFFF',
          px: { xs: 2, md: 10 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#1A1A1A',
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'left',
          }}
        >
          EXPERIANCE
        </Typography>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require('../assets/experience.png')}
              alt="experience illustration"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ ml: { md: 20 } }}>
            {experienceData.map((exp, index) => (
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
                  <WorkIcon />
                </Avatar>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: '#555' }}
                  >
                    {exp.duration}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, mb: 1 }}>
                    {exp.company}
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 16 }}>
                    {exp.responsibilities.map((task, i) => (
                      <li key={i} style={{ marginBottom: 4, fontSize: 14 }}>
                        {task}
                      </li>
                    ))}
                  </ul>
                </Box>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Element>
  );
};

export default Experience;
