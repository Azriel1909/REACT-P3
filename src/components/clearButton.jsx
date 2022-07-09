import React from 'react';
import '../stylesheets/buttonClear.css'

const ClearBoton = (props) => (
    <div 
    className='botonlimpiar' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default ClearBoton;