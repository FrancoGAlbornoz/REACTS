import React, {useState} from 'react'
import {Counter} from '../Counter/Counter.js'

export const ItemDetail =({id, category, name, price, descp, img, stock})=>{

	const [cant, setCant]=useState(1)
	
	const addCart = ()=>{

		console.log({
			id,name,category,descp,img,price


		})

	}

	return(

		<div>
			<h2>Producto: {name}</h2>
			<h4>Precio:{price}</h4>
			<p>Detalle: {descp}</p>
			<img src="{img}"/>
			<Counter max ={stock} cant={cant} setCant={setCant} agregar={addCart}/>
		</div>

	)


}