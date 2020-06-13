import React from 'react';
import './Scroll.css'

const Scroll = (props) =>{
  return (
  	<div className='trans-scroll'  style={{overflowY: 'auto', border:'5px solid transparent', height:'605px' }}>
  		{props.children}
  	</div>
  	);
}


export default Scroll;