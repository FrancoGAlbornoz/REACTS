import React, {useState} from 'react'
import './styles.css'

export const Counter =({ max,cant,setCant,agregar })=>{

	

	const handleSuma = () =>{
		if(cant < max){
			setCant(cant+1)
		}
			
	}
	const handleResta= () =>{
		if(cant>1){
			setCant(cant-1)
		}
		
	}
		
	
	return(
		<>

			<div className="botones">

				<button onClick={handleResta}>-</button>
				<p>{cant}</p>
				<button onClick={handleSuma}>+</button>

			</div>
			<button className="btn addCart" onClick={agregar}> Agregar</button>

		</>

	)

}