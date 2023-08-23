export function Myform(props){

    /*
    return(
    
        <form onSubmit={props.submit}>
        
            {props.inputs.map((input, index) =>{
                return(
                    <div key={index}>
                        <label htmlFor={input.name}> {input.name} </label>
                        <input type={input.type} name={input.name}/> 
                    </div>

                )
            })}
            <button type='submit'>Send</button>
        </form>
    )*/

    return(

        <form onSubmit={(e) => {
            e.preventDefault()
            console.log("submit lambda")
            props.submit(e)
        }}>
        
            {props.inputs.map((input, index) =>{
                return(
                    <div key={index}>
                        <label htmlFor={input.name}> {input.name} </label>
                        <input type={input.type} name={input.name}/> 
                    </div>

                )
            })}
            <button type='submit'>Send</button>
        </form>
    )


    
}