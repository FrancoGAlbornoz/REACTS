import {stock} from '../data/stock'

export const pDatos =()=>{

		return new Promise ((resolve,reject)=>{
			setTimeout(()=>{
				resolve(stock)
			}, 2000)
			

		})
	}