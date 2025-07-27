import React from 'react';
import {
    Box,
    Button,
    Typography,
    Avatar,
    Stack,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from 'react-scroll';

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                height: '60vh',
                flexDirection: { xs: 'column', sm: 'row' },
                position: 'relative',
                 pb: { xs: 8, sm: 0 },

                  mb: { xs: 5, sm: 0 },
            }}
        >
    
             {/* <Avatar
                src={require('../assets/profile.jpg')}
                sx={{
                    width: { xs: 200, sm: 300 },
                    height: { xs: 200, sm: 300 },
                    position: 'absolute',
                    top: '50%',
                    left: '40%',
                    transform: 'translate(-50%, -50%)',
                    border: '5px solid white',
                    zIndex: 5,
                    backgroundColor: 'white',
                }}
            />  */}
            <Avatar
  src={require('../assets/profile.jpg')}
  sx={{
    width: { xs: 160, sm: 300 },
    height: { xs: 160, sm: 300 },
    position: { xs: 'static', sm: 'absolute' },
    top: { sm: '50%' },
    left: { sm: '40%' },
    transform: { sm: 'translate(-50%, -50%)' },
    border: '5px solid white',
    zIndex: 5,
    backgroundColor: 'white',
    alignSelf: { xs: 'center', sm: 'initial' },
    mt: { xs: 3, sm: 0 },
  }}
/>

            <Box
                sx={{
                    flex: 1,
                    bgcolor: '#F4F4f4',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                }}
            >
            </Box>
            <Box
                sx={{
                    flex: 1.5,
                    bgcolor: '#FFFFFF',
                    color: 'white',
                    px: { xs: 3, sm: 6 },
                    py: { xs: 3, sm: 0 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ mt: { xs: 10, sm: 0 }, ml: { xs: 0, sm: 25 } }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ color: '#1A1A1A', mb: 2, fontSize: { xs: '2rem', sm: '2.8rem' } }}>
                        DIPALI KUNDE
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#555555', mb: 3, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                        Passionate Front End Developer having hands on experience in building responsive and user friendly web applications using React.js, Redux, and Material UI. I specialize in creating clean UI components, integrating RESTful APIs, and translating design mockups into working code.
                        Let's build something amazing together.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#6C63FF',
                                    color: '#FFFFFF',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    '&:hover': {
                                        backgroundColor: '#4B47C2',
                                    },
                                }}
                            >
                                Contact
                            </Button>
                        </Link>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#6C63FF',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    backgroundColor: '#4B47C2',
                                },
                            }}
                            href="/resume.pdf"
                            download
                        >
                            Download Resume
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

