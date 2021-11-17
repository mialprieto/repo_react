import React from 'react'

<EsteComponente unaPropsComun="tiene una props" /> 

const EsteComponente = ( {unaPropsComun} ) => { 

	return (

			<h1> hola {unaPropsComun} </h1>

		)

}

export default EsteComponente;