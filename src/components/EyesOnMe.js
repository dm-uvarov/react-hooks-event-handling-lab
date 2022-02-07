// Code EyesOnMe Component Here

function HandleBlur() {
    console.log("Hey! Eyes on me!")
}

function EyesOnMe() {
    return (

        <button onBlur={HandleBlur} 
                onFocus={()=>(console.log('Good!'))} 
        >Eyes on me</button>

    )
}


export default EyesOnMe;