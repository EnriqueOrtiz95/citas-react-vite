function Header(){


    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">Veterinaría</span>
            </h1>
        </>
    )
}

export default Header;


// function Header({toma1Valor}){ //?PASANDO EL PROP DESDE EL PADRE
// function Header(props) { //!PROPS NO ES UN ARG, SON LAS PROPIEDADES DEL COMPONENTE
// function Header({numeros, isAdmin, fn}){ //?DESTRUCTURING A LOS PROPS DEL COMPONENTE

    //TODO >>>>>>>>>>>>>>>>>>> PROPS <<<<<<<<<<<<<<<<<<<<<<<
    // console.log(numeros, isAdmin); 
    // console.log(props)
    //fn();
     //?PASANDO UN PROP DEL HIJO AL PADRE
    //  const variableHeader = true;
    //  toma1Valor(variableHeader)
// }