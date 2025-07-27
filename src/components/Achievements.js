import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
import certificate1 from '../assets/certificate1.png'
import certificate2 from '../assets/certificate2.png'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const achievements = [
  {
    title: 'AWS Certification',
    description:
      ' AWS Certified Cloud Practitioner',
    tag: 'Cloud',
    image: certificate1,
  },
  {
    title: 'Microsoft Certification',
    description:
      'Microsoft Certified: Azure Fundamental',
    tag: 'Cloud',
    image: certificate2,
  },

];
const Achievements = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        color: 'white',
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 4 },
        // minHeight: '100vh',
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
        ACHIEVEMENTS
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#1A1A1A' }}
          >
            Certifications are more than credentials — they reflect my dedication to continuous learning and staying ahead in the tech world. From mastering cloud fundamentals to proving my capability in scalable systems, these achievements validate my skills and commitment to professional growth.

          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack spacing={3}>
            {achievements.map((item, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  backgroundColor: '#FFFFFF',
                  color: '#1A1A1A',
                  borderRadius: 3,
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                  overflow: 'hidden',
                  borderLeft: '5px solid #6C63FF',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <WorkspacePremiumIcon sx={{ color: '#6C63FF' }} />
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#333' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#666' }}>
                    {item.description}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      {item.date}
                    </Typography>
                    <Chip
                      size="small"
                      label={item.tag}
                      sx={{ bgcolor: '#e0e0e0', color: '#333', fontWeight: 500 }}
                    />
                  </Stack>
                </CardContent>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    width: { xs: '100%', sm: 130 },
                    height: { xs: 140, sm: 'auto' },
                    objectFit: 'contain',
                    borderTopRightRadius: { xs: 0, sm: 12 },
                    borderBottomRightRadius: { xs: 0, sm: 12 },
                  }}
                />
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievements;
