import React from 'react'

export const ItemList =({productos})=>{

	return(

		<section className="container my-5">
			<h2> Productos</h2>
			<hr/>
			<div className="row">

				{productos.map((prod)=>(
					
					<div key={prod.id} className="card col-4">
							<h4>{prod.name}</h4>
							<p>{prod.price}</p>
							<p>{prod.descp}</p>
					</div>


					))}

			</div>
		</section>

	)

}