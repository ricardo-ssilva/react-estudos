// Aplicação para estudo, utilizando eventos, states, comunicação entre pais e filhos e renderização de listas e condicionais

import { useState } from "react"
import { Botao } from "./assets/components/Botao";
import { Pessoas } from "./assets/components/Pessoas";

const App = () => {

// 1° - Contador: 

    const[number, setNumber] = useState(0)
    const  subtrairNumero = () => {
      setNumber(number - 1 )
    }
    const somarNumero = () => {
        setNumber(number + 1)
    }
//Contador------------------------------------------------------------------------------


// 2° - Renderizando listas
const listas = [
  {nome:'Ricardo', sobrenome: 'Silva', idade: 25, peso: '80kg', altura: '1.80m' },
  {nome:'José', sobrenome: 'Alvez', idade: 21, peso: '80kg', altura: '1.80m'  },
  {nome:'Jeremias', sobrenome: 'Silveira', idade: 19, peso: '80kg', altura: '1.80m'  },
  {nome:'Macunaima', sobrenome: 'Tapuminã', idade: 30, peso: '80kg', altura: '1.80m'  },
  {nome:'Ronaldo ', sobrenome: 'Fenomeno', idade: 25, peso: '80kg', altura: '1.80m'  }
]




//Renderizando listas: -----------------------------------------------------------------

const [show, setShow] = useState(true)

const toggleInfo = () => {
    if(show) {
       setShow(false)
    } else {
       setShow(true)
    } 
    console.log(show)
}

return (
  <div>
    <h1>Aplicações para estudo React</h1>
    <p>Aplicação para estudos: Componentes, eventos, states, comunicação entre pais e filhos e renderização de listas e condicionais</p>

{/* Contador: */}
    <h2>1°.  - Contador:</h2>
    <Botao value='-' clickFn={subtrairNumero} />
    <br />
      {number}
    <br />
    <Botao value='+'  clickFn={somarNumero}/>
    <hr />
{/* Contador: ------------------------------------------------------------------------- */}


{/* Renderizando Listas */}


    <h2>2°. - Renderizando listas:</h2>
    <h3>Lista de Automática</h3>
    <ul>
      {listas.map((item, index) => (

        <Pessoas  data={item} key={index}/>
        
      ))}
     
    </ul>
{/* Renderizando Listas ---------------------------------------------------------------------*/}

{/* Exibição Condicional: */}
        <h2>3°. - Exibição Condicional: </h2>
        <Botao clickFn={toggleInfo} value={'Exibir uma nova lista'} /> 
        {show == true &&
          <ul>
            <br />
            {
              listas.map((item, index)=>(
                <li><strong>Nome:</strong>  {item.nome} {item.sobrenome}; <br /> <strong>Idade:</strong> {item.idade}; <br /> <strong>Peso: </strong> {item.peso} <br /> <strong>Altura:</strong> {item.altura} <hr /></li>

              ))
            
            }</ul>
        }














{/*  Exibição Condicional ---------------------------------------------------------------------*/}




  </div>
)
}

export default App;