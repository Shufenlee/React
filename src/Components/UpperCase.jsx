export function UpperCase(props){
    return(

        <div>
            <div style={{color: props.textcolor ?? 'red'}}>{props.text}</div>
            <div>{props.text.toUpperCase().toString()}</div>
        </div>

    )
}