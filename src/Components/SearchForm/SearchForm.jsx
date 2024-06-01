import React, { useRef,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

import './SearchFrom.css'

const SearchFrom = () => {
  const {setSearchTerm,setResultTitle} =useGlobalContext();
  const searchText =useRef('');
  const navigate = useNavigate ();
  
  useEffect(()=> searchText.current.focus(),[]);
  const handleSumbit = (e) => {
    e.preventDefault();
    let temSearchtrem = searchText.current.value.trim();
    if ((temSearchtrem.replace(/[^\w\s]/gi,"")).lenght === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something...");
    }else{
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
   };
  
  return (
    <div className='serach-from'>
      <div className="container">
        <div className="search-form-content">
          <from className="search-from" onSubmit={handleSumbit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input type="text" className='form-control' placeholder='The last World...' ref={searchText} />
              <button type='sumbmit'  className='flex flex flex-c' onClick={handleSumbit}>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </from>
        </div>
      </div>

    </div>
  )
}

export default SearchFrom