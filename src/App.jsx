// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
                                    //? inicializamos el localstorage aqui por las nuevas v. de react.
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({}) //?EDITAR PACIENTE
  
  //?NO ES NECESARIO ESTE USEEFFECT EN LA NUEVA VERSION DE REACT.
  // useEffect(() => {
    // const obtenerLS = () => {
        // const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) || [];
    //   setPacientes(pacientesLS);
    // }

    // obtenerLS();
  // }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;





//TODO >>>>>>>>>>>>>>>>>>>>>>>> INTRODUCTION TO REACT (HERE) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function App() {

  // const toma1Valor = valor => console.log(valor);

  // const imprime2m2 = () => console.log(2 + 2);
//   //?ANTES DEL RETURN PUEDE SER JS CODE
//   // const sumar = () => {
//   //   const num = 5;
//   //   if(num > 5){
//   //     console.log('Mayor')
//   //     return;
//   //   }
//   //   console.log('Menor');
//   // }

//   // sumar();
//   const edad = 18;

//   return (

    
//     //?AQUI NO PUEDES PONER JS CODE
//     //!PERO...si pones "{ content }" ESTO SI CORRE CODE JS
//     //!NO PUEDES PONER IF COMO CONDICIONAL, SI NO UN TERNARIO "?".

//     //?ESTO ES UN FRAGMENT EN REACT Y SIRVE COMO EL ELEMENTO PADRE EN EL NIVEL MAXIMO DEL RETURN
//     <> 

          //TODO -----------------> PROPS <---------------------
          // <Header 
            // toma1Valor={toma1Valor}
          //   //?propName = { values }
          //   // numeros = { 1 }
          //   // isAdmin = { false }
          //   // fn = { imprime2m2 }
          // />
//       {edad >= 18 ? 'Mayor' : 'Nel bro'} 
//       <div className="App">
//         <h1>{'Hola mundo!'.toLowerCase()}</h1>
//         <p>{edad}</p>
//       </div>
//       <div className="App">
//         <h1>Hola chavo!</h1>
//         <p>chavo</p>
//       </div>
//     </>
//   )
// }