import React, {useContext, useEffect, useState} from 'react';
import {ItemList} from './ItemList'
import {useParams} from 'react-router-dom'
import {UIContext} from '../../context/UIContext'
import {getFirestore} from '../../firebase/config.js'

export const ItemListContainer=()=>{

	const {loading, setLoading}= useContext(UIContext)
	const {catId}= useParams()

	const [data, setData]=useState([])

	useEffect(()=>{
		setLoading(true)

		const db = getFirestore()
		const products =db.collection('products')


		if(catId){
			const filtro =products.where('category','==', catId)
			filtro.get()
				.then((response)=>{
					const data = response.docs.map((doc)=> ({...doc.data(),id: doc.id}))
					console.log(data)
					setData(data)
				})
				.finally(()=> {
                    setLoading(false)
                })
		}
		else{
			products.get()
			.then((response)=>{
				const data = response.docs.map((doc)=> ({...doc.data(),id: doc.id}))
				console.log(data)
				setData(data)
			})
			.finally(()=>{
				setLoading(false)
			})

		}

	}, [catId, setLoading])

	return(
		
		<>
			{ loading ? <h2>Cargando...</h2>
			: <ItemList productos={data}/>
			}
		</>						

	)
}