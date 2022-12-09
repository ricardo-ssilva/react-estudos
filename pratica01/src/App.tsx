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
  {nome:'Ricardo', sobrenome: 'Silva', idade: 25, peso: '80kg;', altura: '1.80m;' },
  {nome:'José', sobrenome: 'Alvez', idade: 21, peso: '80kg;', altura: '1.80m;'  },
  {nome:'Jeremias', sobrenome: 'Silveira', idade: 19, peso: '80kg;', altura: '1.80m;'  },
  {nome:'Macunaima', sobrenome: 'Tapuminã', idade: 30, peso: '80kg;', altura: '1.80m;'  },
  {nome:'Ronaldo ', sobrenome: 'Fenomeno', idade: 25, peso: '80kg;', altura: '1.80m;'  }
]




//Renderizando listas: -----------------------------------------------------------------


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
    <div className="info" >
      <Botao value='+'  clickFn={somarNumero}/>
    </div>
    <hr />
{/* Contador: ------------------------------------------------------------------------- */}


{/* Renderizando Listas e Exibição Condicional*/}


    <h2>2°. - Renderizando listas e Exibição Condicional:</h2>
    <h3 >Lista  Automática</h3>

    <ul>
          {listas.map((item, index) => (
    
            <Pessoas  data={item} key={index}/>
            
          ))}
        
    </ul> 
 

    
{/* Renderizando Listas ---------------------------------------------------------------------*/}

        


















  </div>
)
}

export default App;