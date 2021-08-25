import React, {useEffect, useState} from 'react';
import {pDatos} from '../../util/pDatos'
import {ItemList} from './ItemList'
import {useParams} from 'react-router-dom'

export const ItemListContainer=()=>{

	const {catId}= useParams()
	

	const [data, setData]=useState([])
	const [loading, setLoading]=useState(false)



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