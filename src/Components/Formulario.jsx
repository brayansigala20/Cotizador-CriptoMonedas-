import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import ListadoCriptos from "./ListadoCriptos"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { Monedas } from "../Data/data"

    const InputSubmit = styled.input`
        background-color: #9497ff;
        border: none;
        width: 100%;
        padding: 10px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: background-color .3s ease;

        &:hover{
            background-color: #7a7dfd;
            cursor: pointer;
        }
    `
const Formulario = ({setSeleccion , cotizacion}) => {
    const [cripto , SetCriptos]=useState([])

    const [error, setError]= useState(false)
    const [moneda , SelectMonedas] = useSelectMonedas('Seleciona la Moneda', Monedas)
    const [criptos , SelectCriptos] = useSelectMonedas('Seleciona cripto', cripto)
    useEffect(()=>{
        const ServerPeticion = async ()=>{
            const peticion = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
            const jsonPeticion = await peticion.json()
            

            const arraycripto = jsonPeticion.Data.map(cripto=> {
                const criptoI  = cripto.CoinInfo
                
                const  objeto = {
                        id: criptoI.Name ,  nombre: criptoI.FullName
                    }
                    
                    return objeto
            })
            SetCriptos(arraycripto)

        }
        ServerPeticion()
    },[])
    const handleSubmit =  e=>{
        e.preventDefault()

        if([criptos , moneda].includes('')){
            setError(true)
            return
        }
         setError(false)
         setSeleccion({moneda , criptos})


    }
  return (
      <>
        {error && <Error>campos oblogatorios</Error>}
        <form 
            onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCriptos/>
            {cotizacion.PRICE && <ListadoCriptos cotizacion={cotizacion}/>}

            <InputSubmit 
                type="submit" 
                value='cotizar'
        />
        </form>
      </>
  )
}

export default Formulario