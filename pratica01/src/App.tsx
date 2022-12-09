// Aplicação para estudo, utilizando enventos, states, comunicação entre pais e filhos e renderização de listas e condicionais

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
  {nome:'Ricardo', sobrenome: 'Silva', idade: 25 },
  {nome:'José', sobrenome: 'Lito', idade: 21 },
  {nome:'Jeremias', sobrenome: 'O que', idade: 19 },
  {nome:'Macunaima', sobrenome: 'Heroi', idade: 30 },
  {nome:'Ronaldo ', sobrenome: 'Fenomeno', idade: 25 }
]

//Renderizando listas: -----------------------------------------------------------------

return (
  <div>
    <h1>Aplicações para estudo React</h1>
    <p>Aplicação para estudos: Componentes, enventos, states, comunicação entre pais e filhos e renderização de listas e condicionais</p>

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

        <Pessoas data={item} key={index}/>
      ))}
    </ul>
{/* Renderizando Listas ---------------------------------------------------------------------*/}
  </div>
)
}

export default App;