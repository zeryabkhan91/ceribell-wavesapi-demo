import { Home, PageNotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';

import GridLayout from 'layout/grid-layout';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<GridLayout />}>
      <Route index element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  </Routes>
);
