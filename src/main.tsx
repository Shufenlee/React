import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2'
import './index.css'
import { UpperCase } from './Components/UpperCase.jsx'
import { InputProps, FormProps } from './Components/form2'
import { LoadingProvider } from './Context/Context'


const props = {
  submit: submit,
  inputs: [
      {
          name: 'email',
          type: 'email',

      },
      {
          name: 'password',
          type: 'text',
      },
      {
        name: 'phone',
        type: '´text'
      }
  ]
}

function submit(event){
    console.log("SUBMIT")

    const payload = [
      event.target.email.value,
      event.target.password.value,
      event.target.phone.value
    ]

    console.log(payload)
}

const inputs : InputProps[] =
[
    {
      name: 'name',
      type: 'text',
      label: 'name'
    },

    {
      name: 'password',
      type: 'text',
      label: 'password'
    },

  ]

const formprop : FormProps = {
  submitname: "Enviar",
  inputs: inputs,
  
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
//ReactDOM.createRoot(document.getElementById('root')).render(
  root.render(
  <React.StrictMode>

{/*
    <App >
      <div><h1>I am children</h1></div>
    </App>

    <UpperCase text= "UpperCase Text" textcolor='blue'/>
<UpperCase text= "UpperCase Text"/>*/}

   <LoadingProvider>
   <App2 submitname="submit" inputs={inputs}/>
   </LoadingProvider>

    

  </React.StrictMode>,
)
