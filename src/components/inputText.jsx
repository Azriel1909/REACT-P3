import React from 'react';
import '../stylesheets/inputText.css';
// Definir componentes funcionales como función flecha.


const Pantalla = (props) => (
  <div className='inputScreen'>
      {props.input}
  </div>
);

export default Pantalla;