import React, {useContext} from 'react'
import {CartContext} from '../../context/CartContext.js'
import {BsFillTrashFill} from 'react-icons/bs'
import './styles.css'
import { Link } from 'react-router-dom'


export const CartScreen = () =>{

	const { carrito ,deleteCart ,vaciarCarrito} =useContext(CartContext)

	return(
		<div>
			<h1>Tu resumen.</h1>

			{carrito.map (prod => (
				<div key={prod.id}>
					<h3>{prod.name}</h3>
					<p>Cantidad: {prod.cant}</p>
					<p>Precio: ${prod.price*prod.cant} </p>
					<BsFillTrashFill onClick={()=> deleteCart(prod.id)}/>
				</div>
			))}
			<hr/>

			<button className="btn Vaciar" onClick={vaciarCarrito} >Vaciar</button>
			<Link to="/checkout">
			   	<button className=" bnt FinCompra1">
                    Finalizar mi compra
                </button>
            </Link>
		</div>	
	)
}