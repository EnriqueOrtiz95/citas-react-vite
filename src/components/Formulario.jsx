import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  //*SIEMPRE DECLARAR NUESTRO STATE ENTRE EL COMPONENTE Y EL RETURN
  //?stateVariable, setter = useState(initialValue)
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  
  const [error, setError] = useState(false);


  //?useEffect es lo analogo a un guardia o un event de states, cuando hay un "cambio"
  //?en un state, este hook se dispara, recordar siempre recibe un callback. 
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  // //*Cuando no hay dependencias, solo se EJECUTA 1 VEZ.
  // useEffect(() => {
  //   console.log('El componente esta listo')
  // }, [])


  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('Enviando formulario');
    //?VALIDAR FORM
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }
    setError(false)

    //?OBjecto de paciente

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //?EDITANDO EL REGISTRO
      // console.log('editando')
      objetoPaciente.id = paciente.id
      // console.log(objetoPaciente);
      // console.log(paciente);
                                          //?el state de la App
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ?
        objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados);
        setPaciente({});
      
    }else{
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente])
      // console.log('nuevo registro');
    }

    // console.log(objetoPaciente)


    //?RESET FORM
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade pacientes y {''}
          <span className="text-indigo-600 font-bold">Administralos</span>  
        </p>

        <form action="" 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
          { error && <Error> <p>Todos los campos son obligatorios</p> </Error>
          }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
              Nombre Mascota {nombre}
            </label>
            <input 
              type="text" 
              id="mascota" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Nombre de la mascota" 
              value={nombre} 
              onChange={ e => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input 
              type="text" id="propietario" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Nombre del Propietario"
              value={propietario} 
              onChange={ e => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input 
              type="text" id="email" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
              placeholder="Email contacto" 
              value={email} 
              onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input 
              type="date" id="alta" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha} 
              onChange={ e => setFecha(e.target.value)} 
            />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea 
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas.." 
              value={sintomas} 
              onChange={ e => setSintomas(e.target.value)}
            />
          </div>

          <input type="submit" name="" id="" value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors" />
        </form>
    </div>
  )
}

export default Formulario


//TODO >>>>>>>>>>>>>>>>>>>>>>>>> LECTURA DE APRENDIZAJE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const Formulario = () => {
//     //!NO PUEDES HACER HOOKS DE FORMA CONDICIONAL
//   // const admin = false;
//   // if(admin){
//   //   const[puedeVer, setPuedeVer] = useState(true)
//   // }
//   //!NI TAMPOCO DESPUES DE UN RETURN
//   // let cargando = false;
//   // if(cargando) return;
//   // const[visible, setVisible] = useState(true)
  {/* <form>
    //TODO >>>>>>>> como un prop(mensaje) //
    { error && <Error mensaje='Todos los campos son obligatorios' />}
  </form> */} 
//   // setNombre('Taco')
//   // console.log(nombre)
  // return (
  //   <div>
  //     taco
  //   </div>
  // )
// }