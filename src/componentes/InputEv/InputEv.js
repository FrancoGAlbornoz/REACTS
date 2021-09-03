import React, {useState, setValue} from 'react'



export const InputEv =()=>{
	const [values, setValues] = useState({
		nombre: '',
		apellido:'',
		mail: ''

	})

	const handleInputChange=(e)=>{
		console.log(e.target.name)
		setValue(e.target.value)
	}

	/*const handleName=(e)=>{
		setValues({
			...values,
			nombre: e.target.value
		})
	}
	const handleSecName=(e)=>{
		setValues({
			...values,
			apellido: e.target.value
		})
	}
	const handleMail=(e)=>{
		setValues({
			...values,
			mail: e.target.value
		})
	}*/

	const handleSubmit= (e)=>{
		e.preventDefault()
		console.log(values)

	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
				types="text"
				value={values.nombre}
				onChange={handleInputChange}
				name="nombre"
				/>
				<input
				types="text"
				value={values.apellido}
				onChange={handleInputChange}
				name="apellido"
				/>
				<input
				types="mail"
				value={values.mail}
				onChange={handleInputChange}
				name="mail"
				/>

				<button type="submit">X</button>
			</form>

		</div>
		 	
		

	)
}