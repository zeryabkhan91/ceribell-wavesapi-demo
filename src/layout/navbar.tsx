import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ResponsiveAppBar = () => (
  <AppBar position='static'>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='#app-bar-with-responsive-menu'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            Open
          </IconButton>
        </Box>
        <Typography
          variant='h5'
          noWrap
          component='a'
          href='#app-bar-with-responsive-menu'
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);
export default ResponsiveAppBar;
