import React, { useContext } from "react"
import { LoadingContext, LoadingProvider } from "../Context/Context"

export interface InputProps{
    name: any,
    label: string,
    type: any,
    value?: String,
    onChange?: () =>{}
}


export interface FormProps{
    submitname: string,
    inputs: InputProps[],
    onSubmit?: () =>{}
}

export function MyForm2({submitname, inputs, onSubmit} : FormProps){
    //const {changeLoading, loading} = useContext(LoadingContext)

    return(

        <form onSubmit={onSubmit}>
        
            {inputs.map((input, index) =>{
                return(
                    <div key={index}>
                        <label htmlFor={input.name}> {input.label} </label>
                        <input type={input.type} name={input.name} onChange={input.onChange}/> 
                    </div>

                )
            })}
            <button type='submit'>Send</button>
            
        </form>

        
    )
}