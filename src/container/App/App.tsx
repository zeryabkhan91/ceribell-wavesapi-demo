import React, { FunctionComponent } from 'react';

import Grid from '@mui/material/Grid';

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = function () {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <div className='m-auto font-sans antialiased text-center'>
          <h1 className='text-indigo-700'>Hello World</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
