import React, { useContext } from "react"
import './App.css'
import { InputProps, FormProps, MyForm2 } from './Components/form2'
import { LoadingContext, LoadingProvider } from "./Context/Context"

function App2({submitname, inputs, onSubmit} : FormProps){

  const {changeLoading, loading} = useContext(LoadingContext)

  return(
    
    <>
    <div>
     < MyForm2 submitname={submitname} inputs={inputs} ></MyForm2>
    </div>

    <button onClick={()=>{changeLoading(true)}}> True </button>
    <button onClick={()=>{changeLoading(false)}}>False </button>
    
    </>

  )
}

export default App2
