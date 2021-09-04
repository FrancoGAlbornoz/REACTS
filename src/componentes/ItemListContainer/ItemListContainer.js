import React, {useContext, useEffect, useState} from 'react';
import {pDatos} from '../../util/pDatos'
import {ItemList} from './ItemList'
import {useParams} from 'react-router-dom'
import {UIContext} from '../../context/UIContext'

export const ItemListContainer=()=>{

	const {loading, setLoading}= useContext(UIContext)
	const {catId}= useParams()

	const [data, setData]=useState([])
	



	useEffect(()=>{
		setLoading(true)

		pDatos()
			.then(res=>{

				if(catId){				
					const aFiltro= res.filter (prod=> prod.category === catId)
					setData( aFiltro )
				}else{
					setData(res)
				}

			})
			.catch(err=>console.log(err))
			.finally(()=>{
				setLoading(false)
			})
	}, [catId])

	return(
		
		<>
			{ loading ? <h2>Cargando...</h2>
			: <ItemList productos={data}/>
			}
		</>						

	)
}