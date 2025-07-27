import React from 'react';
import { Link } from 'react-scroll';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloseIcon from '@mui/icons-material/Close';

const primaryColor = '#6C63FF';
const hoverColor = '#5145CD';

const Sidebar = ({ open, onOpen, onClose }) => {
  const navItems = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      type: 'scroll',
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      type: 'scroll',
    },
    {
      text: 'Resume',
      icon: <ArticleIcon />,
      type: 'download',
      url: '/resume.pdf',
    },
    {
      text: 'Contact',
      icon: <ContactMailIcon />,
      type: 'scroll',
    },
  ];

  return (
    <>
      <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1300 }}>
        <IconButton onClick={onOpen} sx={{ color: primaryColor }}>
          <MenuIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <Box
          sx={{
            width: 250,
            bgcolor: '#1d1d1d',
            height: '100%',
            color: 'white',
            p: 2,
          }}
        >
          <IconButton onClick={onClose} sx={{ mb: 3, color: primaryColor }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                {item.type === 'scroll' ? (
                  <Link
                    to={item.text.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={onClose}
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        color: 'white',
                        mb: 1,
                        border: `1px solid ${primaryColor}`,
                        borderRadius: 5,
                        '&:hover': {
                          bgcolor: primaryColor,
                          color: 'white',
                          transform: 'scale(1.02)',
                        },
                        transition: '0.3s ease',
                      }}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </Link>
                ) : (
                  <a
                    href={item.url}
                    download
                    onClick={onClose}
                    style={{
                      width: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <ListItemButton
                      sx={{
                        color: 'white',
                        mb: 1,
                        border: `1px solid ${primaryColor}`,
                        borderRadius: 5,
                        '&:hover': {
                          bgcolor: primaryColor,
                          color: 'white',
                          transform: 'scale(1.02)',
                        },
                        transition: '0.3s ease',
                      }}
                    >
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </a>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;

