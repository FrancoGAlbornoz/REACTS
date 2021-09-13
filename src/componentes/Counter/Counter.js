import React from 'react'
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

				
					<div>
						<button onClick={handleResta} disabled={agregado}>-</button>
						<p>{cant}</p>
						<button onClick={handleSuma} disabled={agregado}>+</button>
						<button className="btn addCart"  onClick={agregar} disabled={agregado}> Agregar</button>
					</div>
					
					
					<Link to="/cart" >
					<button disabled={!agregado} className=" btn FinCompra">Finalizar compra</button>
					</Link>
				

			</div>
			
			
		</>

	)

}