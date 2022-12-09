import { Botao } from './Botao'
import { useState } from 'react'

type Props = {
    data: {
        nome: string;
        sobrenome: string;
        idade: number;
        peso: string;
        altura: string
    }
}




export const Pessoas = ({data}: Props) => {
    
const [show, setShow] = useState(true)
const [buttonValue,setButtonValue] = useState('Ver Mais')

const toggleInfo = () => {
    if(show) {
       setShow(false)
       setButtonValue('Ver Menos')
    } else {
       setShow(true)
       setButtonValue('Ver Mais')
    } 
    console.log(show)
}

    return (
        <div>
            {show == true ? <li>
                <strong>Nome:</strong>  {data.nome} {data.sobrenome}; <br /> <strong>Idade:</strong> {data.idade}; <br />
            </li> : 
              <li><strong>Nome:</strong>  {data.nome} {data.sobrenome}; <br /> <strong>Idade:</strong> {data.idade}; <br /> <strong>Peso: </strong> {data.peso} <br /> <strong>Altura:</strong> {data.altura}</li>
            }
            
            <div className='botao-align' >
                <Botao clickFn={toggleInfo} value={buttonValue} />
            </div>
            <hr />
        </div>
    )
}