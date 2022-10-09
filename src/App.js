
import { useState } from 'react';
import RoutesMain from './Routes';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [user,setUser] = useState(null)

  return (
    <>
    <RoutesMain
    user={user}
    setUser={setUser}
    toast={toast}
    />
    <ToastContainer/>
    </>
  );
}

export default App;
