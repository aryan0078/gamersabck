import React from 'react';
import AppLayout from './Layout'
import Home from './screens/Home'
import Payment from './screens/Payment'
function App() {
  return (
    
   <AppLayout screen={<Payment/>}/>
  );
}

export default App;
