import { AiFillHeart } from 'react-icons/ai';

export default function Options() {
    return(
        <div className="h-screen w-1/4">
            <AiFillHeart className='w-10 h-10 ml-auto'/>
            <div>
              <select name='price' className="border border-black rounded-full">
                <option>$0</option>
                <option>$50</option>
                <option>$100</option>
                <option>$150</option>
                <option>$200</option>
                <option>$250</option>
               </select>
             </div>
            <div>
             <select name='category' className="border border-black rounded-full">
                <option>men's clothing</option>
                <option>jewelery</option>
                <option>electronics</option>
                <option>women's clothing</option>
              </select>
            </div>
          </div>
    )
}