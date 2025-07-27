import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Element } from 'react-scroll';

const projects = [
  {
    title: 'Insight Bot',
    image: require('../assets/project1.png'),
    description:
      'Built custom UI logic to handle file uploads, status handling, and result rendering.',
    tech: ['React.js', 'Figma', 'Material UI'],
  },
  {
    title: 'Data Reconciliation Web App',
    image: require('../assets/project2.png'),
    description:
      'Developed responsive user-facing web application using React.js and Material-UI, enhancing user engagement and streamlining data comparison processes.',
    tech: ['React.js', 'Redux', 'Material UI'],
  },
  {
    title: 'Adapt',
    image: require('../assets/project3.png'),
    description:
      ' Designed and developed dynamic UI components in React.js and implemented backend services using Spring Boot.',
    tech: ['React.js', 'Redux', 'Material UI'],
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Element name="projects">
      <Box
        sx={{
          bgcolor: '#F9F9F9',
          color: '#555555',
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          align="center"

          sx={{ color: '#1A1A1A', fontWeight: 'bold', mb: 6 }}
        >
          Projects
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ maxWidth: '100%', mx: 'auto' }}
        >
          {projects.map((project, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md="auto"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >

              <Box
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  position: 'relative',
                  bgcolor: '#FFFFFF',
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: 360,
                  width: { xs: '100%', sm: 280, md: 300 },
                  px: { xs: 2, sm: 3 },
                  py: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s',
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mb: 2, textAlign: 'center', color: '#1A1A1A', zIndex: 3 }}
                >
                  {project.title}
                </Typography>
                <Box
                  sx={{
                    height: 150,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 15,
                    left: 15,
                    width: '85%',
                    bgcolor: '#555555',
                    color: 'white',
                    borderRadius: 2,
                    padding: '10px',
                    fontSize: 13,
                    opacity: hovered === index ? 1 : 0,
                    transform: hovered === index
                      ? 'translateY(0)'
                      : 'translateY(10px)',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    {project.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    bgcolor: '#555555',
                    color: 'white',
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    fontSize: 12,
                    opacity: hovered === index ? 1 : 0,
                    transform: hovered === index
                      ? 'translateY(0)'
                      : 'translateY(-10px)',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: 2,
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <Typography key={i} variant="caption" display="block">
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Element>
  );
};

export default Projects;
