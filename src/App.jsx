import React from 'react';
import './App.css';

export default function App() {
  return (
  <>
  <div className='fullscreen'>
  <input className = "input" type='text' placeholder='Enter location'></input>
  <div className='weathershow'>
  <div className='placentemp'>
    <div className='place'>London,GB</div>
    <div className='weathertype'>scattered cloud</div>
    <div className='weather'>10</div>
    </div>
    <div className='weatherproperty'>
    <img className='image' src='https://cdn-icons-png.flaticon.com/512/252/252035.png' alt="cloud"></img>
    <div className='allabout'>
    <div>feels like</div>
    <div>humidity</div>
    <div>wind</div>
    </div>
    </div>
  </div>
  </div>
  </>
  )
}