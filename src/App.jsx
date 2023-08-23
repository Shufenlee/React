import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Myform } from './Components/form'

const darkTheme = {
  color: 'white',
  background: 'black'
}

const lightTheme = {
  color: 'black',
  background: 'white'
}

/*
function App(props) {

  const [counter, setCounter] = useState(11) 
  const [theme, setTheme] = useState(lightTheme)

  function Increment(){
    //setCounter(counter+1);
    setCounter((state) => state+1)
  }

  function ChangeTheme()
  {
    if (theme.color == 'white')
      setTheme(lightTheme)
    else
      setTheme(darkTheme)
  }

  return (
    <>
    <div style={theme}>
      <h1>12345678io</h1>
      <h1>{props.children}</h1>
      <h1>{counter}</h1>
      <button onClick = {Increment}>Increment</button>
      <button onClick = {ChangeTheme}>Change</button>
    </div>

    </>
  )
}*/

function App(props){

  return(

    <>

   {<div><Myform submit={props.submit} inputs={props.inputs}></Myform></div>}
    </>

  )
}

export default App
