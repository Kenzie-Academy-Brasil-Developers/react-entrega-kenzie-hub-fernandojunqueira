import RoutesMain from './Routes';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <RoutesMain
    toast={toast}
    />
    <ToastContainer/>
    </>
  );
}

export default App;
