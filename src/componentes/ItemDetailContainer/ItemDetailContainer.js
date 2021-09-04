import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ItemDetail} from './ItemDetail'
import {pDatos} from '../../util/pDatos'
import {UIContext} from '../../context/UIContext'


export const ItemDetailContainer = () =>{

	const {loading, setLoading}=useContext(UIContext)

	const { itemId } = useParams()
	const[item, setItem]= useState(null)
	
	console.log(itemId)
	console.log(item)

	useEffect(()=>{
		setLoading(true)

		pDatos()
			.then(res =>{
				setItem(res.find(prod =>prod.id===parseInt(itemId)))
			})
			.finally(()=>{setLoading(false)})
		

	}, [itemId])

	return(

		<div>
			{loading
				? <h3>Cargando</h3>
				:<ItemDetail {...item}/>
			}	
		</div>

	)

}