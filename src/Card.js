import React from 'react';


const Card = ({name , id , email}) => {
	return(
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5'>
		<img alt = "robots" src= {`https://robohash.org/${id}`}/>
		<h2>{name}</h2>
		<p>{email}</p>

		</div>
		)
}
export default Card;