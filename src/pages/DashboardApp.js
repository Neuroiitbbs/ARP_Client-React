import { useNavigate } from 'react-router-dom';
// material
import { Box, Grid, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// components
import Page from '../components/Page';
import { AppCard } from '../components/_dashboard/app';

// data
import { branches } from '../assets/data/branchData';

// ----------------------------------------------------------------------

DashboardApp.propTypes = {
  user: PropTypes.object
};

function Capitalize(name) {
  return name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default function DashboardApp({ user }) {
  const navigate = useNavigate();
  if (!user) {
    navigate('/app');
  }
  return (
    <Page title="Main Page | ARP">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Hi {user ? Capitalize(user.displayName) : ''}{' '}
            <span role="img" style={{ fontSize: '2rem' }} aria-label="hi">
              👋
            </span>
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {branches.map((branch) => {
            if (!branch.show) return null;

            return (
              <Grid item xs={12} sm={6} md={3} key={branch.title}>
                <AppCard
                  color={branch.color}
                  icon={branch.icon}
                  title={branch.title}
                  subtitle={branch.subtitle}
                  code={branch.code}
                />
              </Grid>
            );
          })}
        </Grid>
        <br />
      </Container>
    </Page>
  );
}
