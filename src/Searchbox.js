import React from 'react';

const Seacrhbox = ({searchfield, searchChange}) => {
	return(
		<div className = 'pa3'>
		<input 
		 className = 'pa3 ba b--green bg-lightest-blue'
		 type = 'search' 
		 onChange = {searchChange}
		 placeholder = 'search robots'/>
		</div>

		)
}

export default Seacrhbox;