import React from 'react';
import { useNavigate } from 'react-router-dom';
// Material-UI components
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// Custom Page component
import Page from './components/Page';
import neuro from './assets/images/neuro.png';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  backgroundColor: 'white'
}));

// ----------------------------------------------------------------------

export default function LoginPage({ user }) {
  const navigate = useNavigate();
  if (user) {
    navigate('/dashboard');
  }
  return (
    <RootStyle title="Welcome | Academic Resource Portal">
      <Container>
        <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
          <Box
            component="img"
            src={neuro}
            alt="Academic Resource Portal"
            sx={{ height: 200, width: 200, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Typography variant="h4" paragraph>
            Welcome to Academic Resource Portal by Neuromancers
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Please login to view the courses.
          </Typography>
        </Box>
      </Container>
    </RootStyle>
  );
}
