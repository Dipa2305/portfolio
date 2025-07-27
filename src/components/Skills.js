import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Element } from 'react-scroll';

const skills = [
  { name: 'GitHub', icon: require('../assets/github.png') },
  { name: 'Figma', icon: require('../assets/figma.png') },
  { name: 'JavaScript', icon: require('../assets/js.png') },
  { name: 'CSS', icon: require('../assets/css.png') },
  { name: 'React', icon: require('../assets/react.png') },
  { name: 'Redux', icon: require('../assets/redux.png') },
  { name: 'Material UI', icon: require('../assets/mui.png') },
  { name: 'HTML', icon: require('../assets/html.png') },
];

const extendedSkills = [...skills, ...skills]; 

const Skills = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (!paused && container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <Element name="skills">
      <Box
        sx={{
          bgcolor: '#F9F9F9',
          color: 'white',
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: 'black', fontWeight: 'bold', mb: 4 }}
        >
          SKILLS
        </Typography>

        <Box
          ref={scrollRef}
          sx={{
            maxWidth: { xs: '100%', md: '80%' },
            margin: '0 auto',
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            scrollBehavior: 'smooth',
            py: 2,
            px: 1,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {extendedSkills.map((skill, index) => (
            <Card
              key={index}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              sx={{
                minWidth: 180,
                maxWidth: 210,
                height: 150,
                flex: '0 0 auto',
                bgcolor: '#F4F4F4',
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(130, 126, 235, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '#6C63FF',
                },
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name}
                sx={{ width: 40, height: 40, mb: 1 }}
              />
              <CardContent sx={{ textAlign: 'center', p: 0 }}>
                <Typography sx={{ fontWeight: 'bold', color: '#1A1A1A' }}>
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Element>
  );
};

export default Skills;
