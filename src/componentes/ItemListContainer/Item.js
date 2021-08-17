import React from 'react'

export const Item= ({name,price,descp}) =>{

	return(
		<div className="card col-4">
			<h4>{name}</h4>
			<p>{price}</p>
			<p>{descp}</p>
		</div>





	)



}