import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {ItemDetail} from './ItemDetail'
import {UIContext} from '../../context/UIContext'
import {getFirestore} from '../../firebase/config.js'


export const ItemDetailContainer = () =>{

	const {loading, setLoading}=useContext(UIContext)

	const { itemId } = useParams()
	const[item, setItem]= useState(null)
	
	

	useEffect(()=>{
		setLoading(true)

		const db = getFirestore()
		const products = db.collection('products')
		const item =products.doc(itemId)

		item.get()
			.then((doc)=>{
			console.log(doc.data())
			setItem({...doc.data(), id:doc.id})
			})
			.finally(()=>{setLoading(false)})
		

	}, [itemId, setLoading])

	return(

		<div>
			{loading
				? <h3>Cargando</h3>
				:<ItemDetail {...item}/>
			}	
		</div>

	)

}