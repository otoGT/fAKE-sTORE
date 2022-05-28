import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

export default function Options() {
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  console.log(price)
  console.log(category)
    return(
        <div className="h-screen w-1/4">
            <AiFillHeart className='w-10 h-10 ml-auto'/>
            <div>
              <select name='price' className="border border-black rounded-full"  onChange={e => setPrice(e.target.value)}>
                <option value='0'>$0</option>
                <option value='50'>$50</option>
                <option value='100'>$100</option>
                <option value='150'>$150</option>
                <option value='200'>$200</option>
                <option value='250'>$250</option>
               </select>
             </div>
            <div>
             <select name='category' className="border border-black rounded-full" onChange={e => setCategory(e.target.value)}>
                <option value='men`s clothing'>men's clothing</option>
                <option value='jewelery'>jewelery</option>
                <option value='electronics'>electronics</option>
                <option value='women`s clothing'>women's clothing</option>
              </select>
            </div>
          </div>
    )
}