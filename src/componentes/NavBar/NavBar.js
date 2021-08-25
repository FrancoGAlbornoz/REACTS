
import './styles.css'
import {Link} from 'react-router-dom'

export const NavBar =()=>{

	return (

		<header className="encabezado">

			<Link to={"/"}><h1> E-Tienda </h1></Link>

			<nav>
				<Link className="navg1" to={"/contact"}>Contactanos</Link>
				<Link className="navg2" to={"/cart"}>Carrito</Link>
				<Link className="navg3" to ={"/category/teclado"}>Teclados</Link>
				<Link className="navg4" to ={"/category/auriculares"}>Auriculares</Link>
				<Link className="navg5" to ={"/category/mouse"}>Mouse</Link>
				<Link className="navg6" to ={"/category/microfono"}>Mic</Link>
			</nav>	

		</header>	



	)



}