import styled from "@emotion/styled"
import  {useEffect , useState} from "react"
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from "./Components/Formulario"

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    
  }
`
const Imagen = styled.img`
max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display:block;
`
const Heading = styled.h1`
font-family: 'lato' sans-serif;
color: #fff;
font-weight: 700;
text-align: center;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
  margin: 10px auto auto;
}
`

function App() {

  const [seleccion , setSeleccion] = useState({})
  const [cotizacion , setCotizacion] = useState({})

  useEffect(()=>{
    if (Object.keys(seleccion).length > 0) {
      const ServidorApi = async ()=>{
        const {criptos, moneda} = seleccion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptos}&tsyms=${moneda}`
        const peticion = await fetch(url)
        const jsonP = await peticion.json()
          setCotizacion(jsonP.DISPLAY[criptos][moneda]) 
      }
      ServidorApi()
    }
  },[seleccion])
  return (
    <Contenedor>
      <Imagen 
      src={ImagenCripto} />
      <div>
      <Heading>Cotiza criptomonedas al innstante</Heading>
      <Formulario
      setSeleccion={setSeleccion}
      cotizacion={cotizacion} />
      </div>
    </Contenedor>
  )
}

export default App
