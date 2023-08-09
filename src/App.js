import Button from './Button'
const arr =[
    'Chanchito feliz',
    'Chanchito triste',
    'Chanchito emocionado',
]
const App = () =>{
    const miVariable = false;//Ejemplo instrucciones condicionales
    if(miVariable){
        return <p>Mi variable dio true!</p>
    }
    return(
        <div>
            <h1 onClick={(e)=>console.log('click', e)}>Hola mundo</h1>
            {arr.map(el => <p key={el}>{el}</p>)}
            <Button onClick={()=>console.log('clickeado')}>
                Enviar
            </Button>
        </div>
    )
}

export default App