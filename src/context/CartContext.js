import {createContext, useState} from 'react'



export const CartContext = createContext()

export const CartProvider = ({children}) =>{

	const [carrito, setCarrito] = useState([])
	
	const addCart=(prod)=>{
		setCarrito([
			...carrito,
			prod

		])
	}

	const deleteCart = (id) =>{
		setCarrito( carrito.filter(prod=> prod.id!==id))
	}

	const cantCarrito = () =>{
		return carrito.reduce ((acc, prod) => acc + prod.cant, 0)
	}

	const vaciarCarrito = () => {
        setCarrito([])
    }
    const isInCart = (id) => {
        return carrito.some(el => el.id === id)
    }

    const totalCarrito = () =>{
    	return carrito.reduce ((acc, prod) => acc + prod.price*prod.cant, 0)

    }

	return (

		<CartContext.Provider value={{carrito, totalCarrito, isInCart, addCart, deleteCart, cantCarrito, vaciarCarrito}}>
			{children}
		</CartContext.Provider>

	)


}

