import { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

interface OwnProps {}

type Props = OwnProps;

const GridLayout: FunctionComponent<Props> = () => (
  <Grid
    container
    spacing={0}
    direction='row'
    alignItems='center'
    justifyContent='center'
    sx={{ minHeight: '100vh' }}
  >
    <Outlet />
  </Grid>
);

export default GridLayout;
