import { useState } from 'react';
import List from './components/With image overlay and add button';

function App() {
    const [price, setPrice] = useState()
    const [category, setCategory] = useState()
    
const data  =  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
 return(
    <div className='Main h-screen'>  
        <List/>
    </div>
 )
}

export default App;
