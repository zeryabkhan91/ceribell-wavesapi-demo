import { EEGChart } from 'components/home/chart';
import Grid from '@mui/material/Grid';
import { useEegData } from 'hooks/useEegData';
import { Loading } from 'components/shared/Loading';

const Home = () => {
  const { waves, loading } = useEegData();

  if (loading) {
    return <Loading />;
  }

  return (
    <Grid item xs={12}>
      <div className='m-auto font-sans antialiased text-center'>
        <h1 className='text-indigo-700'>Ceribo EEG Data</h1>
        {waves.map((item, idx) => (
          <EEGChart data={item} key={Math.random()} />
        ))}
      </div>
    </Grid>
  );
};

export default Home;
