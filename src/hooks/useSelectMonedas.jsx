import { useState } from "react"
import styled from "@emotion/styled"
const LabelS = styled.label`
display: block;
    color: #ffffff;
    font-family: 'lato', sans-serif;
    font-size: 700;
    margin: 20px;

`
const SelectS = styled.select`
    width: 100%;
    border-radius: 10px;
    padding: 14px;
    font-size: 15px;
    margin-bottom: 15px;
`
const useSelectMonedas = (label,opcion) => {
    const [state,  setState]= useState('')
    const SelectMonedas = ()=>(
        <>
        <LabelS>{label}</LabelS>
        <SelectS
            value={state}
            onChange={e => setState(e.target.value)} >
                <option value="Select">--Selecionar--</option>
            {opcion.map(opcion=>(
            <option 
                key={opcion.id}
                value={opcion.id}
            >
                {opcion.nombre}
            
            </option>
            ))}
        </SelectS>
        </>
    )
        return [ state , SelectMonedas]
}

export default useSelectMonedas