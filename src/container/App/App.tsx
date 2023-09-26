import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = function () {
  return (
    <div className='m-auto antialiased font-sans font-serif font-mono text-center'>
      <h1 className='text-indigo-700'>Hello World</h1>
    </div>
  );
};

export default App;
