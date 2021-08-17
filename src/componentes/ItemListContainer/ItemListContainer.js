import React, {useEffect, useState} from 'react';
import {pDatos} from '../../util/pDatos'
import {ItemList} from './ItemList'

export const ItemListContainer=({greeting})=>{

	const [data, setData]=useState([])
	const [loading, setLoading]=useState(false)

	useEffect(()=>{
		setLoading(true)

		pDatos()
			.then(res=> setData(res))
			.catch(err=>console.log(err))
			.finally(()=>{
				setLoading(false)
			})

	}, [])



	return(
		/*<div>
			<h3>{greeting}</h3>
			<hr/>
		</div>*/

		<>
			{ loading ? <h2>Cargando...</h2>
			: <ItemList productos={data}/>
		}
		</>	
				
			

		



	)




}