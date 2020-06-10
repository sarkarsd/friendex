import React from 'react'

const Card = ({name, email, id}) => {
	return (
	 	<div className='tc bg-light-green dib pr3 ma2 grow bw-2 shadow-5'> 
			<img alt='Cats' src= {`https://robohash.org/set_set4/${id}?size=200x200`} /> 
			<div>
				<h2>{name}</h2>
				<p>{email}</p>	
			</div>
		</div>
	);
}


export default Card;