import React, {useContext, useState, setValues} from 'react'
import {generarOrden} from '../../firebase/generarOrden'
import {CartContext} from '../../context/CartContext'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'

export const Checkout = () =>{

	const {carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)

	const [values, setValues] = useState({
		nombre: '',
		mail: '',
		tel: 0,

	})

	const handleInputChange= (e) =>{
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit= (e) =>{
		e.preventDefault()

		if(values.nombre.length > 2 && values.mail.length > 2 && values.tel.length > 6){
			generarOrden(values, carrito, totalCarrito())
				.then(res =>{
					Swal.fire({
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Genial!'
                    })
				vaciarCarrito()
				})
				.catch( err => {
                    console.log(err)
                })
			
		}else{
			Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
              })
		}

		
	}

	return(
		<div>
			<h3>Checkout</h3>
			<hr/>
		{!carrito.length
			? <Redirect to="/"/>
			:

			<div>
				<form onSubmit={handleSubmit}>
					<h4>Nombre</h4>
					<input
						types="text"
						value={values.nombre}
						onChange={handleInputChange}
						name="nombre"
						required
					/>
					<h4>Telefono</h4>
					<input
						
						types="tel"
						value={values.tel}
						onChange={handleInputChange}
						name="tel"
						required
					/>
					<h4>Email</h4>
					<input
						
						types="mail"
						value={values.mail}
						onChange={handleInputChange}
						name="mail"
						required
					/>
					<button type="submit">Finalizar</button>
				</form>
			</div>
		}
		</div>

	)
}	