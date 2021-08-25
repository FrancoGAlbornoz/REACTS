import React from 'react';
import {NavBar} from './componentes/NavBar/NavBar.js'
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer.js'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer.js'

function App() {

    return(
    	<>	
    	<BrowserRouter>

      		<NavBar/>
 
    		<Switch>

    			<Route exact path="/">
    				<ItemListContainer greeting="Bienvenidos a E-Tienda"/>
    			</Route>

    			<Route exact path="/category/:catId">
    				<ItemListContainer/>
    			</Route>

    			<Route exact path="/detail/:itemId">
    				<ItemDetailContainer/>
    			</Route>

    			<Route exact path="/contact">
    				<h1>Contactanos</h1>
    			</Route>

    			<Route exact path="/cart">
    				<h1>Carrito</h1>
    			</Route>

    			<Route exact path="*">
    				<h1>ERROR404</h1>
    				<Redirect to="/" />
    			</Route>

    			

    		</Switch>

    	</BrowserRouter>
    	</>
    	
  )  
}

export default App;
