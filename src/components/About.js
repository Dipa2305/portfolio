// import React from 'react';
// import { Box, Typography, Divider, useTheme } from '@mui/material';
// import { Element } from 'react-scroll';

// const About = () => {
//   const theme = useTheme();

//   return (
//     <Element name="about">
//       <Box
//         sx={{
//           py: { xs: 3, md: 4 },
//           px: 2,
//           backgroundColor: '#F9F9FB',
//           display: 'flex',
//           justifyContent: 'center',
//         }}
//       >
//         {/* <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             gap: 6,
//             maxWidth: '1100px',
//             width: '100%',
//             backgroundColor: '#fff',
//             p: { xs: 4, md: 6 },
//             borderRadius: 3,
//             boxShadow: theme.shadows[3],
//           }}
//         > */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             gap: 6,
//             maxWidth: '1100px',
//             width: '100%',
//             backgroundColor: '#fff',
//             p: { xs: 4, md: 6 },
//             borderRadius: 3,
//             boxShadow: theme.shadows[3],
//             flexWrap: 'wrap', 
//           }}
//         >
//           <Box sx={{ flex: 1 }}>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               Who I am
//             </Typography>

//             <Typography variant="body1" sx={{ color: '#555555', mb: 2, lineHeight: 1.8 }}>
//               My name's Dipali Kunde . I'm a Full stack Developer based in Pune India.
//             </Typography>

//             <Typography variant="body1" sx={{ color: '#555555', lineHeight: 1.8 }}>
//               I'm a dedicated and detail-oriented React Developer with a strong foundation in front-end development, currently working at Capgemini. Over the past few years, I’ve contributed to impactful projects and full-stack applications using React.js, Redux, Spring Boot, and AWS.

//               I enjoy solving real-world problems with clean code and intuitive design. Beyond coding, I collaborate closely with cross-functional teams, ensuring seamless UI/UX experiences and smooth backend integration.

//               When I'm not coding, I'm exploring UI design and learning new tech to stay ahead of the curve.

//             </Typography>
//           </Box>
//           {/* <Box
//             component="img"
//             src={require('../assets/bg.jpg')}
//             alt="About me"
//             sx={{
//               width: { xs: '100%', md: 380 },
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//             }}
//           /> */}
//           <Box
//             component="img"
//             src={require('../assets/bg.jpg')}
//             alt="About me"
//             sx={{
//               width: { xs: '100%', md: 380 },
//               borderRadius: 2,
//               boxShadow: 3,
//               objectFit: 'cover',
//               maxWidth: '100%',
//             }}
//           />
//         </Box>
//       </Box>
//     </Element>
//   );
// };

// export default About;
import React from 'react';
import { Box, Typography, Stack, useTheme } from '@mui/material';
import { Element } from 'react-scroll';

const About = () => {
  const theme = useTheme();

  return (
    <Element name="about">
      <Box
        sx={{
          scrollMarginTop: { xs: '100px', md: '120px' }, 
          py: { xs: 3, md: 4 },
          px: 2,
          backgroundColor: '#F9F9FB',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1100px',
            width: '100%',
            backgroundColor: '#fff',
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            boxShadow: theme.shadows[3],
              scrollMarginTop: { xs: '80px', sm: '100px' },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            {/* Text Section */}
            <Box sx={{ flex: 1, width: '100%' }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Who I am
              </Typography>

              <Typography variant="body1" sx={{ color: '#555555', mb: 2, lineHeight: 1.8 }}>
                My name's Dipali Kunde. I'm a Full stack Developer based in Pune, India.
              </Typography>

              <Typography variant="body1" sx={{ color: '#555555', lineHeight: 1.8 }}>
                I'm a dedicated and detail-oriented React Developer with a strong foundation in front-end development, currently working at Capgemini. Over the past few years, I’ve contributed to impactful projects and full-stack applications using React.js, Redux, Spring Boot, and AWS.
                <br /><br />
                I enjoy solving real-world problems with clean code and intuitive design. Beyond coding, I collaborate closely with cross-functional teams, ensuring seamless UI/UX experiences and smooth backend integration.
                <br /><br />
                When I'm not coding, I'm exploring UI design and learning new tech to stay ahead of the curve.
              </Typography>
            </Box>

            {/* Image Section */}
            <Box
              component="img"
              src={require('../assets/bg.jpg')}
              alt="About me"
              sx={{
                width: { xs: '100%', md: 380 },
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />
          </Stack>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
