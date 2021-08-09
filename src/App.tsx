import React from 'react';
import { useState } from 'react'

import Header from './Header';
import Todo from './Todo';
import Footer from './Foot';

function App() {

return (
        <div>
       <Header/>
      <div className='mx-auto max-w-2xl'></div>     

            <Todo></Todo>

          <Footer copyright = "Copyright © 2021 "></Footer>
        </div> 
  );
}

export default App;