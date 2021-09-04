import React, {useState} from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export const Counter =({ max,cant,setCant,agregar,agregado })=>{

	

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

				{
					agregado 
						? <Link to="/cart" className="btn FinCompra">Terminar mi compra</Link>
						:

					<div>
						<button onClick={handleResta}>-</button>
						<p>{cant}</p>
						<button onClick={handleSuma}>+</button>
						<button className="btn addCart" onClick={agregar}> Agregar</button>
					</div>
				}

			</div>
			
			
		</>

	)

}