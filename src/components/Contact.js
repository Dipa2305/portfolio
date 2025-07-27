import React, { useRef, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Instagram,
  Send,
  Favorite,
} from '@mui/icons-material';

import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';


const Contact = () => {
  const form = useRef();
  const [snackOpen, setSnackOpen] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_as60zwr',
        'template_tmg0ztn',
        form.current,
        'qu1orU3ABdtuV9SO4'
      )
      .then(
        () => {
          setSnackOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <Element name="contact">
      <Box sx={{ backgroundColor: '#F9F9F9', py: 3, px: 2 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 'bold', mb: 5 }}
        >
          CONTACT ME
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                ml: { md: '-140px' },
                width: { xs: '100%', sm: '550px', md: '600px' },
              }}
            >
              <form ref={form} onSubmit={sendEmail}>
                <Stack spacing={3}>
                  <TextField
                    label="Name"
                    name="name"
                    required
                    fullWidth
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '12px', height: '56px' } }}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    fullWidth
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '12px', height: '56px' } }}
                  />
                  <TextField
                    label="Message"
                    name="message"
                    required
                    fullWidth
                    multiline
                    rows={5}
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: '12px' } }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<Send />}
                    sx={{
                      backgroundColor: '#6C63FF',
                      width: '160px',
                      height: '35px',
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontSize: '16px',
                      '&:hover': {
                        backgroundColor: '#4B47C2',
                      },
                    }}
                  >
                    Send
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ ml: { md: '50px' }, textAlign: 'left' }}>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton sx={{ backgroundColor: '#6C63FF', color: '#fff' }}>
                    <Email />
                  </IconButton>
                  <Typography>dplkunde23@gmail.com</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton sx={{ backgroundColor: '#6C63FF', color: '#fff' }}>
                    <Phone />
                  </IconButton>
                  <Typography>+91 9021343992</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <IconButton sx={{ backgroundColor: '#6C63FF', color: '#fff' }}>
                    <LocationOn />
                  </IconButton>
                  <Typography>Bhumkar Chowk, Pune - 411057</Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                backgroundColor: '#6C63FF',
                color: '#fff',
                '&:hover': { backgroundColor: '#5145CD' },
              }}
            >
              <GitHub />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/dipali-kunde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                backgroundColor: '#6C63FF',
                color: '#fff',
                '&:hover': { backgroundColor: '#5145CD' },
              }}
            >
              <LinkedIn />
            </IconButton>
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              sx={{
                backgroundColor: '#6C63FF',
                color: '#fff',
                '&:hover': { backgroundColor: '#5145CD' },
              }}
            >
              <Instagram />
            </IconButton>
          </a>
        </Stack>
        <Box mt={2} textAlign="center">
          <Typography variant="body2" sx={{ color: '#666' }}>
            Made with <Favorite fontSize="small" sx={{ color: '#666' }} /> by Dipali Kunde
          </Typography>
        </Box>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackOpen(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Element>
  );
};

export default Contact;
