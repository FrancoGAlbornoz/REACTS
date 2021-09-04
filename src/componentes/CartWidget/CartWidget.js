import React, {useContext} from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import './styles.scss'
import {CartContext} from '../../context/CartContext.js'
import {Link} from 'react-router-dom'

export const CartWidget =() => {

	const {cantCarrito}= useContext(CartContext)

	return(

		<div className="cartWidget">
			<Link to="/cart">
			<FiShoppingCart/>
			<span>{cantCarrito()}</span>
			</Link>
			
		</div>

	)



}