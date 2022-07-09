import React from 'react';
import '../stylesheets/button.css';

function Boton(props) {

  const esUnOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  if (esUnOperador(props.children)) {
    return (
      //Template Literals: Permitir crear cadena de caracteres que pueden contener código de js.
      //Usar función anónima  onClick={() => props.manejarClick(props.children)}>
      <div className='contenedorBoton operador'
      onClick={() => props.manejarClick(props.children)}>
          {props.children}
      </div>
    );
  } else {
    return (
      //Template Literals: Permitir crear cadena de caracteres que pueden contener código de js.
      //Usar función anónima  onClick={() => props.manejarClick(props.children)}>
      <div className='contenedorBoton'
      onClick={() => props.manejarClick(props.children)}>
          {props.children}
      </div>
    );

  }
}
export default Boton;

/**Props.children
 * La propiedad children permite reemplazar el valor en el componente (en este caso sólo es texto).
*/