import React from 'react'
import Loderimg from '../images/loader.svg';
import './Loader.css'

const Loader = () => {
  return (
    <div className='loder flex flex-c'>
      <img src={Loderimg} alt="loder" />
    </div>
  )
}

export default Loader