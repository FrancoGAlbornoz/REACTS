import React, {useContext, useState} from 'react'
import {Counter} from '../Counter/Counter.js'
import {CartContext} from '../../context/CartContext.js'

export const ItemDetail =({id, category, name, price, descp, img, stock})=>{

	const {addCart, isInCart}= useContext(CartContext)

	const [cant, setCant]=useState(1)
	
	//
	const handleAdd=()=>{
		addCart({
			category, id, name,descp,img,price,cant
		})

	}

	return(

		<div>
			<h2>Producto: {name}</h2>
			<h4>Precio:{price}</h4>
			<p>Detalle: {descp}</p>
			<img src="{img}"/>
			<Counter max ={stock}
			 cant={cant} 
			 setCant={setCant} 
			 agregar={handleAdd}
			 agregado={isInCart(id)}/>
		</div>

	)


}