import { useState } from 'react';
import List from './components/List';
import Options from './components/Options';

function App() {
 return(
    <div className='Main h-screen flex'>  
        <List/>
        <Options/>
    </div>
 )
}

export default App;