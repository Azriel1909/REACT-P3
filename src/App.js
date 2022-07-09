import './App.css';
import pinkHatLogo from './images/logo.png';
import Boton from './components/button';
import Pantalla from'./components/inputText';
import ClearBoton from './components/clearButton';
import {useState} from 'react';
import {evaluate} from 'mathjs';
//Instalar paquete externo mathjs
//Intalar paquete con npm install mathjs

function App() {

  //Trabajar con estado
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    //Actualizamos el Input
    setInput(input+valor);
  };

  //Calcular
  const calcularOperacion = () => {
    //conditional
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores válidos')
    }
  }

  return (
    <div className='App'>
      <div className='pinkHatLogoContenedor'>
      <img
      src={pinkHatLogo}
      className='pinkHatLogoPicture'
      alt='Logo de Pinkhat'
      />
      </div>
      
      <div className='calculadoraContenedor'>
      <div className='fila'>
      </div>
      <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularOperacion}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <ClearBoton manejarClear={() => setInput('')}>
            Vaciar
          </ClearBoton>
        </div>
      </div>
    </div>
  );
}

export default App;
