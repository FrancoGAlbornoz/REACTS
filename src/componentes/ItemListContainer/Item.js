import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({img,name,descp,price,id}) =>{

	return(
		<div  className="card col-4">
			<img src={img} alt={name}/>
			<h4>{name}</h4>
			<p>{price}</p>
			<p>{descp}</p>
			<Link to={`/detail/${id}`} > Ver mas </Link>
		</div>
	)
}