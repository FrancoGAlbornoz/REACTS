import React from 'react'

export const ItemDetail =({id, category, name, price, descp, img})=>{

	return(

		<div>
			<h2>Producto: {name}</h2>
			<h4>Precio:{price}</h4>
			<p>Detalle: {descp}</p>
			<img src="{img}"/>
		</div>

	)


}